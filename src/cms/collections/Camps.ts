import { CollectionConfig } from 'payload'

export const Camps: CollectionConfig = {
    slug: 'camps',
    admin: {
        useAsTitle: 'name',
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
            name: 'code',
            type: 'text',
            admin: {
                placeholder: 'e.g. BASE_01',
            },
        },
        {
            name: 'tagline',
            type: 'text',
        },
        {
            name: 'description',
            type: 'textarea',
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'details',
            type: 'group',
            fields: [
                {
                    name: 'ageGroup',
                    type: 'text',
                },
                {
                    name: 'timing',
                    type: 'text',
                },
                {
                    name: 'location',
                    type: 'text',
                },
                {
                    name: 'address',
                    type: 'textarea',
                },
                {
                    name: 'contact',
                    type: 'text',
                },
            ],
        },
        {
            name: 'features',
            type: 'array',
            fields: [
                {
                    name: 'feature',
                    type: 'text',
                },
            ],
        },
        {
            name: 'mapEmbed',
            type: 'textarea',
            admin: {
                description: 'Provide the iframe src or embed code',
            },
        },
    ],
}
