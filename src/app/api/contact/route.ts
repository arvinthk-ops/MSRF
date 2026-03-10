import { NextResponse } from 'next/server'

import { getPayload } from '@/lib/payload'

type ContactPayload = {
  name?: unknown
  role?: unknown
  email?: unknown
  phone?: unknown
  message?: unknown
  website?: unknown
}

const toTrimmed = (value: unknown): string =>
  typeof value === 'string' ? value.trim() : ''

const isEmail = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload

    // Honeypot field: real users should not populate this.
    if (toTrimmed(body.website)) {
      return NextResponse.json({ ok: true })
    }

    const name = toTrimmed(body.name)
    const role = toTrimmed(body.role)
    const email = toTrimmed(body.email)
    const phone = toTrimmed(body.phone)
    const message = toTrimmed(body.message)

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 },
      )
    }

    if (!isEmail(email)) {
      return NextResponse.json({ error: 'Invalid email.' }, { status: 400 })
    }

    if (name.length > 120 || role.length > 120 || email.length > 180 || phone.length > 40 || message.length > 5000) {
      return NextResponse.json({ error: 'Input too long.' }, { status: 400 })
    }

    const payload = await getPayload()

    await payload.create({
      collection: 'contact-submissions',
      data: {
        name,
        role,
        email,
        phone,
        message,
      },
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { error: 'Failed to submit enquiry.' },
      { status: 500 },
    )
  }
}
