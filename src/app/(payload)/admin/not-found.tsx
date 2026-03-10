import config from '@payload-config'
import { NotFoundPage } from '@payloadcms/next/views'

import { importMap } from '@/cms/importMap'

export default function NotFound() {
  return NotFoundPage({
    config,
    importMap,
    params: Promise.resolve({ segments: [] }),
    searchParams: Promise.resolve({}),
  })
}
