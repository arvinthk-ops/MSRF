import { CollectionConfig } from 'payload'

export const Coaches: CollectionConfig = {
    slug: 'coaches',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'role', 'specialty'],
    },
    access: {
        read: () => true,
        create: ({ req }) => !!req.user,
        update: ({ req }) => !!req.user,
        delete: ({ req }) => !!req.user,
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'role',
            type: 'text',
            required: true,
        },
        {
            name: 'subtitle',
            type: 'text',
        },
        {
            name: 'specialty',
            type: 'select',
            required: true,
            options: [
                { label: 'Technical', value: 'Technical' },
                { label: 'Tactical', value: 'Tactical' },
                { label: 'Fitness', value: 'Fitness' },
                { label: 'Youth', value: 'Youth' },
            ],
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'origin',
            type: 'text',
            admin: {
                placeholder: 'e.g. Buenos Aires, Argentina',
            },
        },
        {
            name: 'experience',
            type: 'text',
            admin: {
                placeholder: 'e.g. 20+ Years',
            },
        },
        {
            name: 'age',
            type: 'number',
        },
        {
            name: 'bio',
            type: 'textarea',
        },
        {
            name: 'achievements',
            type: 'array',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                },
            ],
        },
    ],
}
