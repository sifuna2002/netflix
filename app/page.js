'use client'
import Image from 'next/image'
import { getSession,useSession } from 'next-auth/react'
import Login from '@/components/Login'
import Nav from '@/components/Nav'

export default function Home() {
  const { data: session, status } = useSession()

  if(!session) return <Login />
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Nav />
    </main>
  )
}

