import { MetadataRoute } from 'next'
import { i18n } from '../../i18n-config'
import { projects } from '@/lib/data'
 
const BASE_URL = 'https://logonova.site'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['/', '/services', '/portfolio', '/about', '/contact', '/pricing']
 
  const routes: MetadataRoute.Sitemap = [];

  i18n.locales.forEach(locale => {
    // Handle static pages for each locale
    staticRoutes.forEach(route => {
      // For default locale 'fr', don't add prefix. For 'en', add /en prefix.
      const path = locale === i18n.defaultLocale 
        ? route 
        : (route === '/' ? `/${locale}` : `/${locale}${route}`);

      routes.push({
        url: `${BASE_URL}${path}`,
        lastModified: new Date(),
      });
    });

    // Handle project pages for each locale
    projects.forEach(project => {
      const path = locale === i18n.defaultLocale
        ? `/portfolio/${project.slug}`
        : `/${locale}/portfolio/${project.slug}`;
      routes.push({
        url: `${BASE_URL}${path}`,
        lastModified: new Date(),
      });
    });
  });
 
  return routes;
}
