import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from '@/i18n-config'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    // If it's a path with the default locale prefix, redirect to the non-prefixed version
    // e.g. /fr/about -> /about
    if (pathname.startsWith(`/${i18n.defaultLocale}/`) || pathname === `/${i18n.defaultLocale}`) {
        const newPath = pathname.replace(`/${i18n.defaultLocale}`, "") || "/";
        return NextResponse.redirect(new URL(newPath, request.url));
    }
    // It's a non-default locale path (e.g. /en/about), so we let it pass.
    return;
  }

  // If there's no locale in the path, rewrite to the default locale internally
  // e.g. /about -> /fr/about
  return NextResponse.rewrite(
    new URL(`/${i18n.defaultLocale}${pathname}`, request.url)
  )
}

export const config = {
  // The matcher prevents the middleware from running on static files and API routes.
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
  ],
}
