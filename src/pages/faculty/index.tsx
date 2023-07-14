import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from '@/components/button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<>

<div className='flex justify-between'>
<div>คณะ/หลักสูตร</div>
<div><Button/></div>
</div>


</>
  )
}
