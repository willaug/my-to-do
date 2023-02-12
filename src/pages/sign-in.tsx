import React from 'react'
import Head from 'next/head'
import { createRipples } from 'react-ripples'
import Link from 'next/link'

const Ripple = createRipples({
  during: 2000,
  color: 'rgba(255, 255, 255, 0.4)'
})

export default function SignIn (): JSX.Element {
  return (
    <>
      <Head>
        <title>MyToDo - Sign In</title>
      </Head>
      <main className="px-5 flex justify-center py-7 w-full h-full lg:h-[100vh]">
        <div className="w-full max-w-[700px]">
          <h1 className="text-3xl text-gray-800 font-bold">Sign In</h1>
          <h3 className="mt-6 text-lg text-gray-600">
            Sign in with your account to continue boosting your productivity.
          </h3>

          <form className="mt-10 flex flex-col gap-3" noValidate>
            <div>
              <label
                htmlFor="email"
                className="text-md text-gray-700 font-medium"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="Type your e-mail"
                className="mt-1 w-full border-[thin] rounded-md border-gray-200 px-4 py-3 text-gray-500 text-normal focus:border-primary transition-all duration-500 ease-in-out"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-md text-gray-700 font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Type your password"
                className="mt-1 w-full border-[thin] rounded-md border-gray-200 px-4 py-3 text-gray-500 text-normal focus:border-primary transition-all duration-500 ease-in-out"
              />
            </div>

            <Ripple>
              <button
                type="button"
                className="mt-3 w-full text-center rounded-xl bg-primary text-white font-semibold p-4"
              >
                Continue
              </button>
            </Ripple>
          </form>

          <div className="mt-12 flex flex-col gap-3 w-full">
            <Ripple>
              <Link
                href="/sign-up"
                className="w-full rounded-xl text-center bg-gray-100 text-gray-600 font-semibold p-3"
              >
                Sign Up
              </Link>
            </Ripple>

            <Ripple>
              <button
                type="button"
                className="w-full rounded-xl bg-gray-100 text-gray-600 font-semibold p-3"
              >
                Use without account
              </button>
            </Ripple>
          </div>
        </div>
      </main>
    </>
  )
}
