'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import LeftInlineAddOnInput from '@/components/LeftInlineAddOnInput'
import { useFormik } from 'formik'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { toast, Toaster } from 'react-hot-toast'
import * as yup from 'yup'

export default function SignupPage() {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    validationSchema: yup.object({
      username: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().min(8).required(),
      retypePassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
    }),
    onSubmit: async (values) => {
      try {
        const response1 = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/waitlist/verify`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: values.email }),
          }
        )

        const data1 = await response1.json()

        if (data1.error || data1.statusCode >= 400) {
          if (Array.isArray(data1.message)) {
            toast.error(data1?.message[0])
          } else {
            toast.error(data1?.message)
          }
        }

        console.log({ data1 })

        if (!data1) return toast.error('You are not on the waitlist!')

        const response2 = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          }
        )

        const data2 = await response2.json()

        if (data2.error || data2.statusCode >= 400) {
          if (Array.isArray(data2.message)) {
            toast.error(data2?.message[0])
          } else {
            toast.error(data2?.message)
          }
        }

        if (data2.id) {
          toast.success('You have created an account!')
        }
      } catch (error) {
        console.log(error)
        toast.error('Something went wrong!')
      }
    },
  })

  return (
    <div className="flex min-h-screen">
      <Toaster />
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <Link href="/">
              <Image
                width={72}
                height={72}
                className="h-12 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
            </Link>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
              Sign up to your account
            </h2>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form
                onSubmit={formik.handleSubmit}
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <div className="mt-1">
                    <LeftInlineAddOnInput
                      id="username"
                      name="username"
                      type="text"
                      required
                      value={formik.values.username}
                      setValue={formik.handleChange}
                      addon="app.io/"
                    />
                  </div>
                  {formik.errors.username && formik.touched.username && (
                    <p className="text-red-500 text-xs italic">
                      {formik.errors.username}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formik.values.email}
                      setValue={formik.handleChange}
                    />
                  </div>
                  {formik.errors.email && formik.touched.email && (
                    <p className="text-red-500 text-xs italic">
                      {formik.errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={formik.values.password}
                      setValue={formik.handleChange}
                    />
                    {formik.errors.password && formik.touched.password && (
                      <p className="text-red-500 text-xs italic">
                        {formik.errors.password}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Repeat Password
                  </label>
                  <div className="mt-1">
                    <Input
                      id="retypePassword"
                      name="retypePassword"
                      type="password"
                      required
                      value={formik.values.retypePassword}
                      setValue={formik.handleChange}
                    />
                    {formik.errors.retypePassword &&
                      formik.touched.retypePassword && (
                        <p className="text-red-500 text-xs italic">
                          {formik.errors.retypePassword}
                        </p>
                      )}
                  </div>
                </div>

                <div className="flex items-center justify-between" />

                <div>
                  <Button type="submit">Sign up</Button>
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-sm">
                    <Link
                      href="/login"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Already have an account? Sign in
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          width={1908}
          height={1426}
          src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
    </div>
  )
}
