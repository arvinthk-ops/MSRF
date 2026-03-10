import type { AccessArgs } from 'payload'

type User = {
    id?: string
    role?: 'admin' | 'moderator'
}

export const isAdmin = ({ req: { user } }: AccessArgs<User>): boolean => {
    return user?.role === 'admin'
}

export const isAdminOrModerator = ({ req: { user } }: AccessArgs<User>): boolean => {
    return user?.role === 'admin' || user?.role === 'moderator'
}

export const isAdminOrSelf = ({ req: { user }, id }: AccessArgs<User>): boolean => {
    if (user?.role === 'admin') return true

    // Allow users to access their own record
    if (user && id) {
        return user.id === id
    }

    return false
}

// Allows anyone logged in to read, but only admins to perform other actions
export const loggedIn = ({ req: { user } }: AccessArgs<User>): boolean => {
    return Boolean(user)
}
