import { CollectionConfig } from 'payload'

export const Matches: CollectionConfig = {
    slug: 'matches',
    admin: {
        useAsTitle: 'opponent',
        defaultColumns: ['opponent', 'date', 'score'],
    },
    access: {
        read: () => true,
        create: ({ req }) => !!req.user,
        update: ({ req }) => !!req.user,
        delete: ({ req }) => !!req.user,
    },
    fields: [
        {
            name: 'competition',
            type: 'text',
            admin: {
                placeholder: 'e.g. KERALA PRO LEAGUE',
            },
        },
        {
            name: 'home',
            type: 'text',
            defaultValue: 'MCFC',
        },
        {
            name: 'away',
            type: 'text',
        },
        {
            name: 'opponent',
            type: 'text',
            required: true,
        },
        {
            name: 'opponentLogo',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'date',
            type: 'date',
            required: true,
        },
        {
            name: 'venue',
            type: 'text',
        },
        {
            name: 'kickOffTime',
            type: 'text',
            admin: {
                placeholder: 'e.g. 15:00',
            },
        },
        {
            name: 'score',
            type: 'group',
            fields: [
                {
                    name: 'mcfc',
                    type: 'number',
                    defaultValue: 0,
                },
                {
                    name: 'opponent',
                    type: 'number',
                    defaultValue: 0,
                },
            ],
        },
        {
            name: 'homeScorers',
            type: 'array',
            fields: [
                {
                    name: 'name',
                    type: 'text',
                },
            ],
        },
        {
            name: 'awayScorers',
            type: 'array',
            fields: [
                {
                    name: 'name',
                    type: 'text',
                },
            ],
        },
        {
            name: 'status',
            type: 'select',
            defaultValue: 'upcoming',
            options: [
                { label: 'Upcoming', value: 'upcoming' },
                { label: 'Live', value: 'live' },
                { label: 'Finished', value: 'finished' },
            ],
        },
        {
            name: 'highlightsUrl',
            type: 'text',
            admin: {
                description: 'YouTube or Cloudinary video link',
            },
        },
    ],
}
