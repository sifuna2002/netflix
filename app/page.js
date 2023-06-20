'use client'
import Image from 'next/image'
import { getSession,useSession } from 'next-auth/react'
import Login from '@/components/Login'

export default function Home() {
  const { data: session, status } = useSession()

  if(!session) return <Login />
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <button className='bg-teal-500 rounded-md p-7'>Welcome Home</button>  
      </div>
    </main>
  )
}

