import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from './i18n-config'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if the pathname is for a static file or API route
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next/static') ||
    pathname.startsWith('/_next/image') ||
    pathname.includes('/favicon.ico') ||
    pathname.endsWith('.png')
  ) {
    return
  }
  
  // Handle redirect from prefixed default locale to non-prefixed path
  if (
    pathname.startsWith(`/${i18n.defaultLocale}/`) ||
    pathname === `/${i18n.defaultLocale}`
  ) {
    const newPath = pathname.replace(`/${i18n.defaultLocale}`, '') || '/'
    return NextResponse.redirect(new URL(newPath, request.url))
  }

  // Check if the path is for a supported but non-default locale. If so, do nothing.
  const isExplicitNonDefaultLocale = i18n.locales
    .filter((l) => l !== i18n.defaultLocale)
    .some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (isExplicitNonDefaultLocale) {
    return
  }

  // At this point, the path is missing a locale prefix.
  // It should be rewritten to the default locale.
  return NextResponse.rewrite(
    new URL(`/${i18n.defaultLocale}${pathname}`, request.url)
  )
}

export const config = {
  // Matcher to run on all paths
  matcher: ['/((?!_next).*)'],
}
