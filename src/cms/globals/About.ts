import { GlobalConfig } from 'payload'

export const About: GlobalConfig = {
    slug: 'about',
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
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'philosophy',
                    type: 'textarea',
                    required: true,
                },
            ],
        },
        {
            name: 'visionTitle',
            type: 'text',
            defaultValue: 'Vision 2031',
        },
        {
            name: 'visionItems',
            type: 'array',
            fields: [
                {
                    name: 'icon',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'text',
                    type: 'textarea',
                    required: true,
                },
            ],
        },
        {
            name: 'missionTitle',
            type: 'text',
            defaultValue: 'Our Mission',
        },
        {
            name: 'missionItems',
            type: 'array',
            fields: [
                {
                    name: 'icon',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'text',
                    type: 'textarea',
                    required: true,
                },
            ],
        },
        {
            name: 'milestones',
            type: 'array',
            fields: [
                {
                    name: 'year',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'description',
                    type: 'textarea',
                    required: true,
                },
            ],
        },
        {
            name: 'boardTitle',
            type: 'text',
            defaultValue: 'Board of Directors',
        },
        {
            name: 'board',
            type: 'array',
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
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                },
            ],
        },
        {
            name: 'partnersTitle',
            type: 'text',
            defaultValue: 'Our Partners',
        },
        {
            name: 'partners',
            type: 'array',
            fields: [
                {
                    name: 'name',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'logo',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
                {
                    name: 'link',
                    type: 'text',
                },
            ],
        },
    ],
}
