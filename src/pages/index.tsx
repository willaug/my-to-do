import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import homePicture from '../../public/home-picture.svg'

export default function Home (): JSX.Element {
  return (
    <>
      <Head>
        <title>MyToDo - Create tasks to do</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className='px-5 py-7 w-full h-full lg:h-[100vh] flex flex-col items-center justify-center  '>
        <div className='flex flex-col lg:flex-row lg:gap-24 gap-7 w-full justify-center items-center'>
          <Image
            src={homePicture}
            alt="background"
            priority={true}
            aria-hidden="true"
            className='w-full max-w-lg h-auto'
          />

          <div className='flex flex-col gap-7 justify-center'>
            <div className='w-full'>
              <h1 className='text-3xl text-gray-800 font-bold'>MyToDo</h1>
              <h3 className='mt-4 text-lg text-gray-600'>Manage your tasks to do with a web app developed in NextJS.</h3>
            </div>

            <button className='w-full rounded-xl bg-rose-400 text-white font-semibold p-4 transition-all ease-in-out duration-500 hover:bg-rose-500'>
              Getting Started
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
