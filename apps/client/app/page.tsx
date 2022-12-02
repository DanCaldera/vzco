import React from 'react'

const page = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <main className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
        <h1 className='text-6xl font-bold'>
          Welcome to{' '}
          <a className='text-purple-600' href='https://vzco.vercel.app'>
            VZCO
          </a>
        </h1>

        <p className='mt-3 text-2xl'>
          Enter the waitlist{' '}
          <input
            className='border border-gray-700 rounded-md p-2 m-2 bg-black text-white focus:outline-none focus:ring-purple-600 focus:border-purple-600 text-center'
            type='text'
            placeholder='Your email address'
          />
        </p>
      </main>
    </div>
  )
}

export default page
