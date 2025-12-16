import { revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'
import { TOP_10_RACKETS } from '@/constants/cacheTags'

export async function GET() {
  revalidateTag(TOP_10_RACKETS, 'max')

  return NextResponse.json({ text: 'success' })
}
