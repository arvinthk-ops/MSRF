import { getPayload } from 'payload'
import config from '@/cms/payload.config'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const payload = await getPayload({ config })

        // 1. Get current Home global data
        const home = await payload.findGlobal({
            slug: 'home',
        })

        if (!home.academyOffers || home.academyOffers.length === 0) {
            return NextResponse.json({ message: 'No academy offers found in CMS. Nothing to clean up.' })
        }

        const mediaIdsToDelete: string[] = []

        // 2. Collect media IDs from academyOffers
        home.academyOffers.forEach((offer: any) => {
            if (offer.image && typeof offer.image === 'object' && offer.image.id) {
                mediaIdsToDelete.push(offer.image.id)
            } else if (typeof offer.image === 'string') {
                mediaIdsToDelete.push(offer.image)
            }
        })

        console.log(`[Cleanup] Found ${mediaIdsToDelete.length} media records to delete...`)

        // 3. Delete media records (this will trigger Cloudinary cleanup via the plugin)
        for (const id of mediaIdsToDelete) {
            try {
                await payload.delete({
                    collection: 'media',
                    id,
                })
                console.log(`[Cleanup] Deleted media ID: ${id}`)
            } catch (err) {
                console.error(`[Cleanup] Failed to delete media ID: ${id}`, err)
            }
        }

        // 4. Clear academyOffers field in Home global
        await payload.updateGlobal({
            slug: 'home',
            data: {
                academyOffers: [],
            },
        })

        return NextResponse.json({
            status: 'success',
            message: `Successfully cleared ${mediaIdsToDelete.length} media assets and reset Academy Offers data.`
        })
    } catch (error: any) {
        console.error('[Cleanup Error]', error)
        return NextResponse.json({ status: 'error', message: error.message }, { status: 500 })
    }
}
