import { MetadataRoute } from 'next'
import { i18n } from '../i18n-config'
import { projects } from '@/lib/data'
 
const BASE_URL = 'https://logonova.site'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/services', '/portfolio', '/about', '/contact']
  
  const staticUrls = staticRoutes.flatMap(route => 
    i18n.locales.map(locale => ({
      url: `${BASE_URL}/${locale}${route}`,
      lastModified: new Date(),
    }))
  )

  const projectUrls = projects.flatMap(project => 
    i18n.locales.map(locale => ({
      url: `${BASE_URL}/${locale}/portfolio/${project.slug}`,
      lastModified: new Date(),
    }))
  )
 
  return [
    ...staticUrls,
    ...projectUrls
  ]
}

    