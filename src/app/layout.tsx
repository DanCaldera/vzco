import React, { ReactNode } from 'react'
import '../styles/globals.css'

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: ReactNode
}) {
  return (
    <html className="h-full" lang="en">
      <body>{children}</body>
    </html>
  )
}
