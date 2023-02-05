import React from 'react'

export default function DevelopedBy (): JSX.Element {
  return (
    <>
      <footer className='fixed bottom-5 left-5 z-1'>
        <a
          className='text-sm text-gray-600 tracking-wide font-medium ease-in-out duration-200 transition-all hover:text-rose-400'
          href="https://www.willaug.dev"
          hrefLang='en'
          target='_blank'
          rel="noreferrer"
        >
          @willaug
        </a>
      </footer>
    </>
  )
}
