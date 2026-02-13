import Link from 'next/link'
import { getDictionary } from '@/lib/dictionaries'
import { type Locale } from '../../../i18n-config'
import { Button } from '@/components/ui/button'
import { Terminal } from 'lucide-react'

export default async function NotFound({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang);
  const { notFoundPage } = dictionary;

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-20rem)] text-center px-4">
      <Terminal className="h-16 w-16 mb-4 text-primary animate-pulse" />
      <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 font-headline">
        404
      </h1>
      <p className="mt-4 text-2xl font-semibold text-foreground">{notFoundPage.title}</p>
      <p className="mt-2 text-muted-foreground">{notFoundPage.subtitle}</p>
      <Button asChild className="mt-8">
        <Link href={`/${params.lang}`}>{notFoundPage.button}</Link>
      </Button>
    </div>
  )
}

    