'use client'

import classNames from 'classnames'
import { useFormik } from 'formik'
import { toast, Toaster } from 'react-hot-toast'
import * as yup from 'yup'

const Page = () => {
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: yup.object({
      email: yup.string().email().required()
    }),
    onSubmit: values => {
      toast('Added to waitlist', { icon: '👍', style: { borderRadius: '10px', background: '#333', color: '#fff' } })
      formik.resetForm()
    }
  })

  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Toaster />
      <main className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
        <h1 className='text-6xl font-bold'>
          Welcome to{' '}
          <a className='text-purple-600' href='https://vzco.vercel.app'>
            VZCO
          </a>
        </h1>
        <form onSubmit={formik.handleSubmit} className='mt-4 text-2xl'>
          Enter the waitlist{' '}
          <input
            id='email'
            name='email'
            className={classNames(
              formik.errors.email && formik.touched.email ? 'border-red-500' : null,
              'border-2 border-gray-700 rounded-md p-2 m-2 bg-black text-white focus:outline-none focus:ring-purple-600 focus:border-purple-600 text-center'
            )}
            type='text'
            placeholder='Your email address'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <button
            type='submit'
            className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline'
          >
            Enter
          </button>
        </form>
      </main>
    </div>
  )
}

export default Page
