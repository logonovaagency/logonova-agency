import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { i18n } from './i18n-config'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // 1. Handle redirect from prefixed default locale to non-prefixed path
  // This ensures that /fr/about is redirected to /about
  if (
    pathname.startsWith(`/${i18n.defaultLocale}/`) ||
    pathname === `/${i18n.defaultLocale}`
  ) {
    const newPath = pathname.replace(`/${i18n.defaultLocale}`, '') || '/'
    return NextResponse.redirect(new URL(newPath, request.url))
  }

  // 2. Check if the path is for a supported but non-default locale. If so, do nothing.
  const isExplicitNonDefaultLocale = i18n.locales
    .filter((l) => l !== i18n.defaultLocale)
    .some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (isExplicitNonDefaultLocale) {
    return
  }

  // 3. At this point, the path is missing a locale prefix.
  // It should be rewritten to the default locale.
  // e.g. /about -> /fr/about (internally)
  return NextResponse.rewrite(
    new URL(`/${i18n.defaultLocale}${pathname}`, request.url)
  )
}

export const config = {
  // Matcher to prevent the middleware from running on static files, API routes, and other assets.
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)'],
}
