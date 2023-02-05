import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import DevelopedBy from '@/components/DevelopedBy'

export default function Document (): JSX.Element {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-white'>
        <Main />
        <NextScript />
        <DevelopedBy />
      </body>
    </Html>
  )
}
