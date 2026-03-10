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

export const getPayload = async () => {
    if (cached.client) {
        return cached.client
    }

    if (!cached.promise) {
        // Dynamic import to avoid bundling issues
        const { getPayload: getPayloadLocal } = await import('payload')
        const config = (await import('@/cms/payload.config')).default
        cached.promise = getPayloadLocal({ config })
    }

    try {
        cached.client = await cached.promise
    } catch (e) {
        cached.promise = null
        throw e
    }

    return cached.client
}
