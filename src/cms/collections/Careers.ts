import { CollectionConfig } from 'payload'

export const Jobs: CollectionConfig = {
    slug: 'jobs',
    admin: {
        useAsTitle: 'title',
    },
    access: {
        read: () => true,
        create: ({ req }) => !!req.user,
        update: ({ req }) => !!req.user,
        delete: ({ req }) => !!req.user,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'category',
            type: 'text',
            admin: {
                placeholder: 'e.g. Coaching',
            },
        },
        {
            name: 'department',
            type: 'text',
        },
        {
            name: 'type',
            type: 'select',
            options: [
                { label: 'Full-time', value: 'full-time' },
                { label: 'Part-time', value: 'part-time' },
                { label: 'Contract', value: 'contract' },
            ],
        },
        {
            name: 'location',
            type: 'text',
        },
        {
            name: 'salary',
            type: 'text',
        },
        {
            name: 'description',
            type: 'textarea',
            required: true,
        },
        {
            name: 'requirements',
            type: 'array',
            fields: [
                {
                    name: 'item',
                    type: 'text',
                },
            ],
        },
        {
            name: 'responsibilities',
            type: 'array',
            fields: [
                {
                    name: 'item',
                    type: 'text',
                },
            ],
        },
        {
            name: 'benefits',
            type: 'array',
            fields: [
                {
                    name: 'item',
                    type: 'text',
                },
            ],
        },
        {
            name: 'isOpen',
            type: 'checkbox',
            defaultValue: true,
            label: 'Accepting Applications',
        },
    ],
}

export const Applications: CollectionConfig = {
    slug: 'applications',
    admin: {
        useAsTitle: 'applicantName',
    },
    access: {
        create: ({ req: { user } }) => !!user,
        read: ({ req: { user } }) => !!user, // Only admins can read
        update: ({ req: { user } }) => !!user,
        delete: ({ req: { user } }) => !!user,
    },
    fields: [
        {
            name: 'job',
            type: 'relationship',
            relationTo: 'jobs',
            required: true,
        },
        {
            name: 'applicantName',
            type: 'text',
            required: true,
        },
        {
            name: 'email',
            type: 'email',
            required: true,
        },
        {
            name: 'coverLetter',
            type: 'textarea',
        },
        {
            name: 'resume',
            type: 'upload',
            relationTo: 'media',
            required: true,
            admin: {
                description: 'PDF format preferred',
            },
        },
        {
            name: 'status',
            type: 'select',
            defaultValue: 'new',
            options: [
                { label: 'New', value: 'new' },
                { label: 'Reviewing', value: 'reviewing' },
                { label: 'Contacted', value: 'contacted' },
                { label: 'Rejected', value: 'rejected' },
            ],
        },
    ],
}
