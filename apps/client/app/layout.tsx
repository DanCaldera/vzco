import Image from 'next/image'
import '../styles/globals.css'

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: {
  children: React.ReactNode
}) {
  return (
    //   create a dynamic gradient absolute background with tailwind
    <html className='h-full bg-black text-white' lang='en'>
      <body>
        <>
          {children}
          <footer className='flex h-24 w-full items-center justify-center'>
            <a
              className='flex items-center justify-center gap-2'
              href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              Powered by <Image className='invert' src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
            </a>
          </footer>
        </>
      </body>
    </html>
  )
}
