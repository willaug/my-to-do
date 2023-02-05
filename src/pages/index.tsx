import React from 'react'
import Head from 'next/head'

export default function Home (): JSX.Element {
  return (
    <>
      <Head>
        <title>MyToDo - Create tasks to do</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>
    </>
  )
}
