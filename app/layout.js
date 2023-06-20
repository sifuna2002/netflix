'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { SessionProvider } from "next-auth/react"

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout(
  { children, sessionProviderProps },
) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Netflix</title>
      </head>
      <body className="bg-gray-100">
        <SessionProvider {...sessionProviderProps}>
          {children}
        </SessionProvider>
      </body>
    </html>

  )
}

