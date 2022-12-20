'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import { useFormik } from 'formik'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import * as yup from 'yup'

export default function ChangePasswordPage() {
  const params = useSearchParams()
  const [pageEnabled, setPageEnabled] = useState(false)
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validationSchema: yup.object({
      password: yup.string().required(),
    }),
    onSubmit: async (values) => {
      const body = {
        email: params?.get('email'),
        token: params?.get('token'),
        password: values.password,
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/change-password-with-token`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      )

      const data = await response.json()

      if (data.error || data.statusCode >= 400) {
        if (Array.isArray(data.message)) {
          toast.error(data?.message[0])
        } else {
          toast.error(data?.message)
        }
      }

      if (data.message === 'Password changed successfully') {
        toast.success(data.message)
        router.push('/auth/login')
      }
    },
  })

  useEffect(() => {
    if (params?.get('token') && params?.get('email')) {
      setPageEnabled(true)
    }
  }, [params])

  if (!pageEnabled) return <div>Invalid link</div>

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
              Change your password
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
                    htmlFor="emailOrUsername"
                    className="block text-sm font-medium text-gray-700"
                  >
                    New Password
                  </label>
                  <div className="mt-1">
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      required
                      value={formik.values.password}
                      setValue={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.errors.password && formik.touched.password && (
                    <p className="text-red-500 text-xs italic">
                      {formik.errors.password}
                    </p>
                  )}
                </div>

                <div>
                  <Button type="submit">Change password</Button>
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
