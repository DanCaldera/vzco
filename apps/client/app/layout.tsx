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
    <html className='bg-black text-white' lang='en'>
      <body>
        <>
          {children}
          <footer className='flex h-24 w-full bg-white text-black items-center justify-center border-t'>
            <a
              className='flex items-center justify-center gap-2'
              href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              Powered by <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
            </a>
          </footer>
        </>
      </body>
    </html>
  )
}
