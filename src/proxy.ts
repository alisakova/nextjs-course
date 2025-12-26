import { NextRequest, NextResponse } from 'next/server'

export async function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/403') && !request.headers.get('x-auth-proxy')) {
    return NextResponse.json({}, { status: 404 })
  }
}
