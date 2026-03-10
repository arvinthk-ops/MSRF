import type { ReactNode } from 'react'
import config from '@payload-config'
import { RootLayout } from '@payloadcms/next/layouts'
import '@payloadcms/next/css'
import '@/app/(payload)/admin/admin-theme.css'

import { importMap } from './importMap'
import { serverFunction } from './serverFunction'

type Args = {
  children: ReactNode
}

export default function Layout({ children }: Args) {
  return RootLayout({
    children,
    config,
    importMap,
    serverFunction,
  })
}
