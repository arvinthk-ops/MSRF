/**
 * Payload CMS Client Helper
 * 
 * This module provides a cached connection to Payload CMS.
 * Note: The actual payload config import is done dynamically to avoid
 * bundling issues with Turbopack. Import the config only when needed.
 */

import type { Payload } from 'payload'

type PayloadCache = {
    client: Payload | null
    promise: Promise<Payload> | null
}

type GlobalWithPayload = typeof globalThis & {
    payload?: PayloadCache
}

const globalWithPayload = globalThis as GlobalWithPayload
let cached = globalWithPayload.payload

if (!cached) {
    cached = globalWithPayload.payload = { client: null, promise: null }
}

/**
 * Gets a shared Payload client instance.
 * Throws an error if the config or client fails to initialize.
 */
export const getPayload = async () => {
    if (cached.client) {
        return cached.client
    }

    if (!cached.promise) {
        // Dynamic import to avoid bundling issues
        try {
            const { getPayload: getPayloadLocal } = await import('payload')
            const config = (await import('@/cms/payload.config')).default
            cached.promise = getPayloadLocal({ config })
        } catch (e) {
            cached.promise = null
            throw e
        }
    }

    try {
        const client = await cached.promise
        if (!client) throw new Error('Payload client failed to initialize')
        cached.client = client
        return client
    } catch (e) {
        cached.promise = null
        cached.client = null
        throw e
    }
}
