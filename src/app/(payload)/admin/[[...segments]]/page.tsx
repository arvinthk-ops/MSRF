import type { Metadata } from 'next'
import configPromise from '@payload-config'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '@/cms/importMap'

export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'

export const generateMetadata = async ({
    params,
    searchParams,
}: {
    params: Promise<{ segments?: string[] }>
    searchParams: Promise<{ [key: string]: string | string[] }>
}): Promise<Metadata> => {
    return generatePageMetadata({
        config: configPromise,
        params,
        searchParams,
    })
}

export default async function Page({
    params,
    searchParams,
}: {
    params: Promise<{ segments?: string[] }>
    searchParams: Promise<{ [key: string]: string | string[] }>
}) {
    return RootPage({
        config: configPromise,
        importMap,
        params: params.then((p) => ({
            ...p,
            segments: p.segments ?? [],
        })),
        searchParams,
    })
}
