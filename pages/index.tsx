import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'

import { Card } from '@/components/Card'
import { Options } from '@/components/Options'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [changeColor, setChangeColor] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='wrapper'>
        <Card
          state={changeColor}
          onClick={() => setChangeColor(!changeColor)}
        />
        <Options
          state={changeColor}
        />
        <Footer
          state={changeColor}
        />
      </div>
    </main>
  )
}
