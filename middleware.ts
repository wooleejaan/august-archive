/* eslint-disable no-warning-comments */
import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname.startsWith('/') && pathname.endsWith('/')) {
    const requestHeaders = new Headers(req.headers)
    requestHeaders.set('x-url', pathname)

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
  }

  if (pathname.startsWith('/archives')) {
    const requestHeaders = new Headers(req.headers)
    requestHeaders.set('x-url', pathname)

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
  }

  if (pathname.startsWith('/algorithms')) {
    const requestHeaders = new Headers(req.headers)
    requestHeaders.set('x-url', pathname)

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
  }

  if (pathname.startsWith('/cs')) {
    const requestHeaders = new Headers(req.headers)
    requestHeaders.set('x-url', pathname)

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
  }

  if (pathname.startsWith('/performances')) {
    const requestHeaders = new Headers(req.headers)
    requestHeaders.set('x-url', pathname)

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
  }

  if (pathname.startsWith('/tags')) {
    const requestHeaders = new Headers(req.headers)
    requestHeaders.set('x-url', pathname)

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
  }

  return NextResponse.next()
}
