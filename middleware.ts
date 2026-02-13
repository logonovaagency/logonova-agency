import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { i18n } from './i18n-config'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if there is any supported locale in the pathname.
  // This check is true for paths like `/` or `/about`, but false for `/fr/about` or `/en/contact`.
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // If the pathname is missing a locale, redirect to the default locale.
  if (pathnameIsMissingLocale) {
    const locale = i18n.defaultLocale

    // This will redirect:
    // - `/` to `/fr`
    // - `/about` to `/fr/about`
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
  }
}

export const config = {
  // Matcher to prevent the middleware from running on static files, API routes, and other assets.
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)'],
}
