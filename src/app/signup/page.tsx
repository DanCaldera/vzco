'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import LeftInlineAddOnInput from '@/components/LeftInlineAddOnInput'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'

export default function SignupPage() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const _handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast('Sign up is not implemented yet', { icon: '🚧' })
  }
  return (
    <div className='flex min-h-screen'>
      <Toaster />
      <div className='flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
        <div className='mx-auto w-full max-w-sm lg:w-96'>
          <div>
            <Link href='/'>
              <Image
                width={72}
                height={72}
                className='h-12 w-auto'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                alt='Your Company'
              />
            </Link>
            <h2 className='mt-6 text-3xl font-bold tracking-tight text-gray-900'>Sign up to your account</h2>
          </div>

          <div className='mt-8'>
            <div className='mt-6'>
              <form onSubmit={_handleSubmit} method='POST' className='space-y-6'>
                <div>
                  <label htmlFor='username' className='block text-sm font-medium text-gray-700'>
                    Username
                  </label>
                  <div className='mt-1'>
                    <LeftInlineAddOnInput
                      id='username'
                      name='username'
                      type='text'
                      required
                      value={username}
                      setValue={setUsername}
                      addon='app.io/'
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                    Email address
                  </label>
                  <div className='mt-1'>
                    <Input id='email' name='email' type='email' autoComplete='email' required value={email} setValue={setEmail} />
                  </div>
                </div>

                <div className='space-y-1'>
                  <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                    Password
                  </label>
                  <div className='mt-1'>
                    <Input
                      id='password'
                      name='password'
                      type='password'
                      autoComplete='current-password'
                      required
                      value={password}
                      setValue={setPassword}
                    />
                  </div>
                </div>

                <div className='flex items-center justify-between'></div>

                <div>
                  <Button type='submit'>Sign up</Button>
                </div>

                <div className='flex items-center justify-center'>
                  <div className='text-sm'>
                    <Link href='/login' className='font-medium text-indigo-600 hover:text-indigo-500'>
                      Already have an account? Sign in
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='relative hidden w-0 flex-1 lg:block'>
        <Image
          className='absolute inset-0 h-full w-full object-cover'
          width={1908}
          height={1426}
          src='https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80'
          alt=''
        />
      </div>
    </div>
  )
}
