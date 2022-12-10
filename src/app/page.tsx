'use client'

import Button from '@/components/Button'
import { ChevronRightIcon, StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'

export default function RootPage() {
  const [email, setEmail] = useState('')

  const _handleNotifyMe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/waitlist`

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (data.error || data.statusCode >= 400) {
        console.log(data.error)
        toast.error('Something went wrong!')
      }

      if (data.id) {
        toast.success('You have been added to the waitlist!')
      }
    } catch (error) {
      console.log(error)
    }

    setEmail('')
  }

  return (
    <div className="bg-white pb-8 sm:pb-12 lg:pb-12">
      <Toaster />
      <div className="px-6 pt-6 lg:px-8">
        <nav
          className="flex h-9 items-center justify-between"
          aria-label="Global"
        >
          <div className="lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
            <Link
              href="/login"
              className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
            >
              Log in
            </Link>
          </div>
        </nav>
      </div>
      <div className="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div>
            <div>
              <Image
                width={50}
                height={50}
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
            </div>
            <div className="mt-20">
              <div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="inline-flex space-x-4">
                  <span className="rounded bg-indigo-50 px-2.5 py-1 text-sm font-semibold text-indigo-600">
                    {"What's new"}
                  </span>
                  <span className="inline-flex items-center space-x-1 text-sm font-medium text-indigo-600">
                    <span>Just shipped version 0.1.0</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </a>
              </div>
              <div className="mt-6 sm:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Server management for growing teams
                </h1>
                <p className="mt-6 text-xl text-gray-500">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo.
                </p>
              </div>
              <form
                onSubmit={_handleNotifyMe}
                className="mt-12 sm:flex sm:w-full sm:max-w-lg"
              >
                <div className="min-w-0 flex-1">
                  <label htmlFor="hero-email" className="sr-only">
                    Email address
                  </label>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <input
                    id="hero-email"
                    name="hero-email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border border-gray-300 px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <Button type="submit">Notify me</Button>
                </div>
              </form>
              <div className="mt-6">
                <div className="inline-flex items-center divide-x divide-gray-300">
                  <div className="flex flex-shrink-0 pr-5">
                    <StarIcon
                      className="h-5 w-5 text-yellow-400"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-yellow-400"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-yellow-400"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-yellow-400"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-yellow-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="min-w-0 flex-1 py-1 pl-5 text-sm text-gray-500 sm:py-3">
                    <span className="font-medium text-gray-900">
                      Rated 5 stars
                    </span>{' '}
                    by over{' '}
                    <span className="font-medium text-indigo-600">
                      500 beta users
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="hidden sm:block">
              <div className="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-gray-50 lg:left-80 lg:right-0 lg:w-full" />
              <svg
                className="absolute top-8 right-1/2 -mr-3 lg:left-0 lg:m-0"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                />
              </svg>
            </div>
            <div className="relative -mr-40 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
              <Image
                className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                width={490}
                height={350}
                src="https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
