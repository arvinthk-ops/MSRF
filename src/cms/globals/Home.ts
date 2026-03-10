import { GlobalConfig } from 'payload'

export const Home: GlobalConfig = {
    slug: 'home',
    admin: {
        group: 'Pages',
    },
    access: {
        read: () => true,
        update: ({ req }) => !!req.user,
    },
    fields: [
        {
            name: 'hero',
            type: 'group',
            fields: [
                {
                    name: 'tagline',
                    type: 'text',
                    required: true,
                    defaultValue: 'മലബാറിന്റെ സ്വന്തം',
                },
                {
                    name: 'titlePart1',
                    type: 'text',
                    required: true,
                    defaultValue: 'MALABAR',
                },
                {
                    name: 'titlePart2',
                    type: 'text',
                    required: true,
                    defaultValue: 'CHALLENGERS',
                },
                {
                    name: 'videoUrl',
                    type: 'text',
                    defaultValue: '/To_discover_Maradona_s_of_India_1080P.webm',
                },
            ],
        },
        {
            name: 'technicalDivide',
            type: 'group',
            fields: [
                {
                    name: 'index',
                    type: 'text',
                    defaultValue: '01 // THE INSTITUTION',
                },
                {
                    name: 'titleLine1',
                    type: 'text',
                    defaultValue: 'ARCHITECTS',
                },
                {
                    name: 'titleLine2',
                    type: 'text',
                    defaultValue: 'OF THE',
                },
                {
                    name: 'titleLine3',
                    type: 'text',
                    defaultValue: 'PITCH',
                },
                {
                    name: 'description',
                    type: 'textarea',
                    required: true,
                },
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                },
            ],
        },
        {
            name: 'partnership',
            type: 'group',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    defaultValue: 'EL SEMILLERO DEL MUNDO',
                },
                {
                    name: 'content',
                    type: 'textarea',
                    required: true,
                },
                {
                    name: 'linkUrl',
                    type: 'text',
                    defaultValue: 'https://argentinosjuniors.com.ar/noticias/captacion/sigue-creciendo-el-convenio-de-colaboracion-deportiva-en-india/',
                },
            ],
        },
        {
            name: 'stats',
            type: 'array',
            maxRows: 3,
            fields: [
                {
                    name: 'label',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'value',
                    type: 'text',
                    required: true,
                },
            ],
        },
        {
            name: 'academyOffers',
            type: 'array',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    required: true,
                },
                {
                    name: 'tag',
                    type: 'text',
                },
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                },
                {
                    name: 'icon',
                    type: 'text',
                    admin: {
                        description: 'Lucide icon name, e.g. Brain, Zap, Users',
                    },
                },
            ],
        },
        {
            name: 'cta',
            type: 'group',
            fields: [
                {
                    name: 'badge',
                    type: 'text',
                    defaultValue: 'GET IN TOUCH',
                },
                {
                    name: 'heading',
                    type: 'text',
                    defaultValue: 'READY TO TRANSFORM YOUR GAME?',
                },
                {
                    name: 'description',
                    type: 'textarea',
                },
                {
                    name: 'buttonText',
                    type: 'text',
                    defaultValue: 'Enquire Now',
                },
                {
                    name: 'buttonLink',
                    type: 'text',
                    defaultValue: '/contact',
                },
                {
                    name: 'stats',
                    type: 'array',
                    fields: [
                        {
                            name: 'value',
                            type: 'text',
                        },
                        {
                            name: 'label',
                            type: 'text',
                        },
                    ],
                },
            ],
        },
    ],
}
