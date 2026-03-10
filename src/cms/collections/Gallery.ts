import { CollectionConfig } from 'payload'

export const Gallery: CollectionConfig = {
    slug: 'gallery',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'category', 'type'],
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
            name: 'description',
            type: 'textarea',
        },
        {
            name: 'category',
            type: 'select',
            options: [
                { label: 'General', value: 'general' },
                { label: 'Facilities', value: 'facilities' },
                { label: 'Media', value: 'media' },
                { label: 'Community', value: 'community' },
            ],
        },
        {
            name: 'items',
            type: 'array',
            minRows: 1,
            labels: {
                singular: 'Media Item',
                plural: 'Media Items',
            },
            admin: {
                initCollapsed: false,
                components: {
                    RowLabel: false,
                },
                description: 'Add one or more media items. Each upload must include alt text.',
            },
            fields: [
                {
                    name: 'type',
                    type: 'select',
                    defaultValue: 'image',
                    options: [
                        { label: 'Image', value: 'image' },
                        { label: 'Local Video', value: 'video' },
                        { label: 'YouTube', value: 'youtube' },
                        { label: 'Instagram', value: 'instagram' },
                        { label: 'Facebook', value: 'facebook' },
                    ],
                    required: true,
                },
                {
                    name: 'media',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                    admin: {
                        condition: (_, siblingData) =>
                            siblingData?.type === 'image' || siblingData?.type === 'video',
                        description: 'Upload image/video; required unless YouTube is selected.',
                    },
                },
                {
                    name: 'alt',
                    type: 'text',
                    label: 'Alt text',
                    required: true,
                    admin: {
                        condition: (_, siblingData) =>
                            siblingData?.type === 'image' || siblingData?.type === 'video',
                        description: 'Required for accessibility and SEO.',
                    },
                },
                {
                    name: 'title',
                    type: 'text',
                },
                {
                    name: 'description',
                    type: 'textarea',
                },
                {
                    name: 'youtubeUrl',
                    type: 'text',
                    admin: {
                        condition: (_, siblingData) => siblingData?.type === 'youtube',
                        description: 'Paste full YouTube URL when using the YouTube type.',
                    },
                },
                {
                    name: 'instagramUrl',
                    type: 'text',
                    admin: {
                        condition: (_, siblingData) => siblingData?.type === 'instagram',
                        description: 'Paste public Instagram post/reel URL.',
                    },
                },
                {
                    name: 'facebookUrl',
                    type: 'text',
                    admin: {
                        condition: (_, siblingData) => siblingData?.type === 'facebook',
                        description: 'Paste public Facebook video/post URL.',
                    },
                },
            ],
        },
    ],
}
