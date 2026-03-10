import { CollectionConfig } from 'payload'

export const Players: CollectionConfig = {
    slug: 'players',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'number', 'position'],
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
            name: 'number',
            type: 'number',
            required: true,
            min: 1,
            max: 99,
        },
        {
            name: 'position',
            type: 'select',
            required: true,
            options: [
                { label: 'Goalkeeper', value: 'GK' },
                { label: 'Defender', value: 'DF' },
                { label: 'Midfielder', value: 'MF' },
                { label: 'Forward', value: 'FW' },
            ],
        },
        {
            name: 'age',
            type: 'number',
            min: 6,
            max: 60,
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'dateOfBirth',
            type: 'date',
        },
        {
            name: 'height',
            type: 'text',
            admin: {
                placeholder: 'e.g. 180cm',
            },
        },
        {
            name: 'weight',
            type: 'text',
            admin: {
                placeholder: 'e.g. 75kg',
            },
        },
        {
            name: 'hometown',
            type: 'text',
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
                    required: true,
                },
            ],
        },
        {
            name: 'stats',
            type: 'group',
            fields: [
                {
                    name: 'pace',
                    type: 'number',
                    min: 0,
                    max: 100,
                    defaultValue: 70,
                },
                {
                    name: 'shot',
                    type: 'number',
                    min: 0,
                    max: 100,
                    defaultValue: 70,
                },
                {
                    name: 'tac',
                    type: 'number',
                    min: 0,
                    max: 100,
                    defaultValue: 70,
                },
            ],
        },
    ],
}
