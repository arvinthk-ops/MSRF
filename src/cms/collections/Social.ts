import { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
    slug: 'testimonials',
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
            name: 'quote',
            type: 'textarea',
            required: true,
        },
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'role',
            type: 'text',
        },
        {
            name: 'location',
            type: 'text',
        },
        {
            name: 'avatar',
            type: 'upload',
            relationTo: 'media',
        },
    ],
}

export const Announcements: CollectionConfig = {
    slug: 'announcements',
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
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
        },
        {
            name: 'category',
            type: 'text',
        },
        {
            name: 'excerpt',
            type: 'textarea',
        },
        {
            name: 'readTime',
            type: 'text',
            admin: {
                placeholder: 'e.g. 4 Min Read',
            },
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'date',
            type: 'date',
            required: true,
        },
        {
            name: 'content',
            type: 'richText',
            required: true,
        },
        {
            name: 'isPublished',
            type: 'checkbox',
            defaultValue: true,
        },
    ],
}
