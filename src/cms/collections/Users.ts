import type { CollectionConfig } from 'payload'
import { isAdmin, isAdminOrSelf, loggedIn } from '../access'

export const Users: CollectionConfig = {
    slug: 'users',
    auth: true,
    admin: {
        useAsTitle: 'email',
        defaultColumns: ['email', 'role', 'createdAt'],
    },
    access: {
        // Anyone logged in can read users (moderators need to see other users for collaboration)
        read: loggedIn,
        // Only admins can create new users
        create: isAdmin,
        // Users can update their own profile (password, etc), Admins can update anyone
        update: isAdminOrSelf,
        // Only admins can delete users
        delete: isAdmin,
    },
    fields: [
        {
            name: 'role',
            type: 'select',
            required: true,
            defaultValue: 'moderator',
            options: [
                {
                    label: 'Admin (Full Access)',
                    value: 'admin',
                },
                {
                    label: 'Moderator (Content Only)',
                    value: 'moderator',
                },
            ],
            access: {
                // Only admins can intentionally change a user's role
                create: isAdmin,
                update: isAdmin,
            },
            admin: {
                description: 'Admins have full access. Moderators can only manage content, not system settings or other users.',
            }
        },
    ],
}
