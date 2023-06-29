import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALITICS}`}></Script>
      <Script
          id='google-analytics'
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALITICS}');
              `,
    }}
    />
        <>
            <DefaultSeo {...SEO}/>
            <Component {...pageProps} />
        </>
    </>
    )
}
