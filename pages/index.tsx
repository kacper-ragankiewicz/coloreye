import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'

import { Card } from '@/components/Card'
import { Options } from '@/components/Options'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='wrapper'>
        <Card/>
        <Options/>
        <Footer/>
      </div>
    </main>
  )
}
