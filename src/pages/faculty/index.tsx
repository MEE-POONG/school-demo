import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <div className='flex justify-between'>
        <div>{"คณะ/หลักสูตร"}</div>
        <div>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default
          </button>
        </div>
      </div>
      <div className='bg-blue-700 w-full h-1'></div>


    </>
  )
}
