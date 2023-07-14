import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <div className='flex justify-between'>
        <div><h1 className='text-4xl text-blue-700'>"คณะ/หลักสูตร"</h1></div>
        <div>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            สมัครเรียน
          </button>
        </div>
      </div>
      <div className='bg-blue-700 w-full h-1'></div>

      <div className='flex columns-2 gap-8'>


        


        <div>
        <img src="/img/faculty/Fbus.png" width="400px" height="100px" />
          <div className='flex '>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#1f306a" d="M22 21H2V3h2v16h2v-9h4v9h2V6h4v13h2v-5h4v7Z" /></svg>
            <div>คณะบริหารธุรกิจ  <div>Faculty of Business Administration</div></div>
          </div>

          <ul className="list-disc list-inside ">
            <li>สาขาวิชาการบัญชี (บช.บ.)</li>
            <li>สาขาวิชาการจัดการ (บธ.บ.)p</li>
            <li>สาขาวิชาระบบสารสนเทศ (บธ.บ.)</li>
            <li>สาขาวิชาการจัดการโรงแรมและการท่องเที่ยว (บธ.บ.)</li>
            <li>สาขาวิชาการจัดการอุตสาหกรรมและโลจิสติกส์ (บธ.บ)</li>
          </ul>
        </div>

        <div>
        <img src="/img/faculty/Fsci.png" width="400px" height="100px" />
          <div className='flex '>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#1f306a" d="M22 21H2V3h2v16h2v-9h4v9h2V6h4v13h2v-5h4v7Z" /></svg>
            <div>คณะวิทยาศาสตร์และเทคโนโลยี  <div>Faculty of Science and Technology</div></div>
          </div>

          <ul className="list-disc list-inside ">
            <li>สาขาวิชาสาธารณสุขศาสตร์ (สบ.)</li>
          </ul>
        </div>

      </div>
      


    </>
  )
}
