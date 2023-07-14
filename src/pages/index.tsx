import Image from 'next/image'
import { Inter } from 'next/font/google'
import RootLayout from '../../components/layout'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (


    <RootLayout>
    <div className='container mx-auto py-24'>
      <h2 className='text-blue-500 text-2xl font-fontTH'>Test Font ทดสอบฟอนต์</h2>
    
    
    </div>
    </RootLayout>
  )
}
