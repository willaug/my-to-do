import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import DevelopedBy from '@/components/DevelopedBy'

export default function Document (): JSX.Element {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className="bg-white">
        <Main />
        <NextScript />
        <DevelopedBy />
      </body>
    </Html>
  )
}
