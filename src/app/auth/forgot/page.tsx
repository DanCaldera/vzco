'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import { useFormik } from 'formik'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast, Toaster } from 'react-hot-toast'
import * as yup from 'yup'

export default function ForgotPage() {
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: yup.object({
      email: yup.string().email().required(),
    }),
    onSubmit: async (values) => {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/email/forgot-password`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ to: values.email }),
        }
      )

      toast.success('Email sent! Check your inbox.')

      router.push('/auth/login')
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
              Recover your password
            </h2>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form onSubmit={formik.handleSubmit} className="space-y-6">
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
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </div>

                <div>
                  <Button type="submit">Send Email</Button>
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-sm">
                    <Link
                      href="/auth/login"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Return to Login
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
