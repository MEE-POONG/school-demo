import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Button() {
  return (
<>

<button className="bg-[#0000B8] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>



</>
  )
}
