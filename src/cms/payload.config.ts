import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import { cloudinaryStorage } from '@pemol/payload-cloudinary'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

import { Users } from './collections/Users'
import { Players } from './collections/Players'
import { Coaches } from './collections/Coaches'
import { Matches } from './collections/Matches'
import { Gallery } from './collections/Gallery'
import { Camps } from './collections/Camps'
import { Jobs, Applications } from './collections/Careers'
import { ContactSubmissions } from './collections/ContactSubmissions'
import { Testimonials, Announcements } from './collections/Social'
import { Home } from './globals/Home'
import { About } from './globals/About'

const isBuildPhase = process.env.NEXT_PHASE === 'phase-production-build'
const payloadSecret = process.env.PAYLOAD_SECRET || (isBuildPhase ? 'fallback-secret-for-build' : undefined)
const databaseUri = process.env.DATABASE_URI || (isBuildPhase ? 'postgres://localhost:5432/build-placeholder' : undefined)

// Ensure large uploads are accepted (1 GB)
process.env.PAYLOAD_UPLOAD_MAX_FILE_SIZE =
    process.env.PAYLOAD_UPLOAD_MAX_FILE_SIZE || String(1 * 1024 * 1024 * 1024)

type CloudinaryEnvConfig = {
    cloud_name: string
    api_key: string
    api_secret: string
}

const parseCloudinaryUrl = (value?: string): Partial<CloudinaryEnvConfig> => {
    if (!value) return {}

    try {
        const parsed = new URL(value)

        if (parsed.protocol !== 'cloudinary:') {
            return {}
        }

        return {
            cloud_name: decodeURIComponent(parsed.hostname || ''),
            api_key: decodeURIComponent(parsed.username || ''),
            api_secret: decodeURIComponent(parsed.password || ''),
        }
    } catch {
        return {}
    }
}

const cloudinaryFromUrl = parseCloudinaryUrl(process.env.CLOUDINARY_URL)
const cloudinaryConfig: CloudinaryEnvConfig = {
    cloud_name: cloudinaryFromUrl.cloud_name || process.env.CLOUDINARY_CLOUD_NAME || '',
    api_key: cloudinaryFromUrl.api_key || process.env.CLOUDINARY_API_KEY || '',
    api_secret: cloudinaryFromUrl.api_secret || process.env.CLOUDINARY_API_SECRET || '',
}


if (!isBuildPhase) {
    if (!payloadSecret) {
        throw new Error('Missing required environment variable: PAYLOAD_SECRET')
    }

    if (!databaseUri) {
        throw new Error('Missing required environment variable: DATABASE_URI')
    }

    if (!cloudinaryConfig.cloud_name || !cloudinaryConfig.api_key || !cloudinaryConfig.api_secret) {
        throw new Error(
            'Missing Cloudinary credentials: set CLOUDINARY_URL or CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET',
        )
    }
}

export default buildConfig({
    admin: {
        user: 'users',
        importMap: {
            baseDir: path.resolve(dirname, '..'),
        },
        components: {
            graphics: {
                Logo: '/app/(payload)/admin/components/Logo#default',
                Icon: '/app/(payload)/admin/components/Icon#default',
            },
            beforeDashboard: [
                '/app/(payload)/admin/components/DashboardWidgets#default',
            ],
            afterNavLinks: [
                '/app/(payload)/admin/components/AfterNavLinks#default',
            ],
            providers: [
                '/app/(payload)/admin/components/AdminProviders#default',
            ],
        },
    },
    routes: {
        api: '/api/payload',
        graphQL: '/api/payload/graphql',
        graphQLPlayground: '/api/payload/graphql-playground',
    },
    collections: [
        Users,
        {
            slug: 'media',
            upload: {
                mimeTypes: ['image/*', 'video/*'],
            },
            access: {
                read: () => true,
                create: ({ req }) => !!req.user,
                update: ({ req }) => !!req.user,
                delete: ({ req }) => !!req.user,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'text',
                    required: true,
                },
            ],
        },
        Players,
        Coaches,
        Matches,
        Gallery,
        Camps,
        Jobs,
        Applications,
        ContactSubmissions,
        Testimonials,
        Announcements,
    ],
    globals: [Home, About],
    editor: lexicalEditor({}),
    secret: payloadSecret as string,
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: postgresAdapter({
        // Sync schema from Payload config to Postgres at startup.
        push: true,
        pool: {
            connectionString: databaseUri as string,
            max: 10,
            idleTimeoutMillis: 10_000,
            connectionTimeoutMillis: 5_000,
            statement_timeout: 5_000,
            idle_in_transaction_session_timeout: 5_000,
        },
    }),
    plugins: [
        cloudinaryStorage({
            collections: {
                media: true,
            },
            config: cloudinaryConfig,
        }),
    ],
})
