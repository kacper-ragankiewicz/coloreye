import { Html, Head, Main, NextScript } from 'next/document'
import Script  from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-F45FND07N4"></Script>

      <Script
          id='google-analytics'
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-GNTHBJBWHY');
              `,
    }}
    />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
