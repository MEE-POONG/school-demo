import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import RootLayout from '@/components/layout'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <RootLayout>

      <div className='container mx-auto py-24'>

      <div className='flex justify-center md:hidden '>
      <button type="button" className="text-2xl text-white bg-[#0000B8] hover:bg-[#6CB4EE] rounded-lg  px-5 py-2.5 mr-2 mb-2 ">
                  สมัครเรียน
                </button> 
      </div>


          
            <div className='flex justify-between'>
              <div><h1 className='text-2xl  md:text-4xl text-[#1F306A]'>คณะ/หลักสูตร</h1></div>
              <div className='hidden md:flex'>
                <button type="button" className="text-xl text-white bg-[#0000B8] hover:bg-[#6CB4EE] rounded-lg  px-5 py-2.5 mr-2 mb-2 ">
                  สมัครเรียน
                </button>
              </div>
            </div>
            <div className='bg-[#1F306A] w-full h-1  mb-7 md:mb-14'></div>
          

        <div className='flex flex-col md:flex-row justify-center gap-16 mb-16   '>
          <div>
            <img src="/img/faculty/Fbus.png" width="400px" height="100px" />
            <div className='flex mt-3 mb-3'>
                <div className='w-[50px] h-[50px] md:w-[65px] md:h-[65px]'>
                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="#1f306a" d="M22 21H2V3h2v16h2v-9h4v9h2V6h4v13h2v-5h4v7Z" /></svg>
                </div>
              <div className='ml-2'>
                <h1 className=' text-l  md:text-2xl text-[#1F306A]' >
                  คณะบริหารธุรกิจ
                </h1>
                <div>
                  <h1 className='text-l md:text-xl text-[#1F306A]'>Faculty of Business Administration</h1>
                </div>
              </div>
            </div>

            <ul className="list-disc list-inside text-[#536878] ml-3 text-xs md:text-base  ">
              <li>สาขาวิชาการบัญชี (บช.บ.)</li>
              <li>สาขาวิชาการจัดการ (บธ.บ.)</li>
              <li>สาขาวิชาระบบสารสนเทศ (บธ.บ.)</li>
              <li>สาขาวิชาการจัดการโรงแรมและการท่องเที่ยว (บธ.บ.)</li>
              <li>สาขาวิชาการจัดการอุตสาหกรรมและโลจิสติกส์ (บธ.บ)</li>
            </ul>
          </div>

          <div>
            <img src="/img/faculty/Fsci.png" width="400px" height="100px" />
            <div className='flex mt-3 mb-3'>
                <div className='w-[50px] h-[50px] md:w-[65px] md:h-[65px]'>
                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="#1f306a" d="M5 21q-1.275 0-1.813-1.137t.263-2.113L9 11V5H8q-.425 0-.713-.288T7 4q0-.425.288-.713T8 3h8q.425 0 .713.288T17 4q0 .425-.288.713T16 5h-1v6l5.55 6.75q.8.975.263 2.113T19 21H5Zm0-2h14l-6-7.3V5h-2v6.7L5 19Zm7-7Z" /></svg>
                </div>
              <div className='ml-2'>
                <h1 className='text-l md:text-2xl text-[#1F306A]'>คณะวิทยาศาสตร์และเทคโนโลยี </h1>
                <div>
                  <h1 className='text-l md:text-xl text-[#1F306A]'>Faculty of Science and Technology</h1>
                </div>
              </div>
            </div>

            <ul className="list-disc list-inside text-[#536878] ml-3  text-xs md:text-base ">
              <li>สาขาวิชาสาธารณสุขศาสตร์ (สบ.)</li>
            </ul>
          </div>

        </div>


        <div className='flex flex-col md:flex-row justify-center gap-16 '>
          <div>
            <img src="/img/faculty/Flib.png" width="400px" height="100px" />
            <div className='flex mt-3 mb-3 '>
                <div className='w-[50px] h-[50px] md:w-[65px] md:h-[65px]'>
                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48"><g fill="#1f306a"><path fillRule="evenodd" d="M23.992 26h.04c5.523 0 10-4.477 10-10s-4.477-10-10-10h-.08c-5.486.043-9.92 4.504-9.92 10s4.434 9.957 9.92 10h.04Zm7.978-9h-2c-.04.69-.124 1.359-.245 2h1.726c.255-.63.432-1.301.52-2Zm-1.693 4h-1.08c-.205.59-.445 1.143-.716 1.65A8.044 8.044 0 0 0 30.277 21Zm-2.592-2c.137-.627.234-1.297.281-2h-2.934v2h2.653Zm-2.653 2h2.023a8.53 8.53 0 0 1-.527 1.042c-.5.831-1.017 1.345-1.496 1.636V21Zm-2-2v-2h-2.998c.047.703.144 1.373.281 2h2.717Zm-2.087 2h2.087v2.716c-.496-.284-1.038-.805-1.56-1.674A8.53 8.53 0 0 1 20.945 21Zm-2.67-2a15.866 15.866 0 0 1-.245-2h-1.936c.087.699.264 1.37.52 2h1.66Zm-.488 2h1.016c.195.564.424 1.094.68 1.581A8.044 8.044 0 0 1 17.787 21Zm12.183-6a15.915 15.915 0 0 0-.245-2h1.726c.255.63.432 1.301.52 2h-2Zm.307-4h-1.08a11.495 11.495 0 0 0-.716-1.65A8.045 8.045 0 0 1 30.277 11Zm-5.245 0h2.023a8.528 8.528 0 0 0-.527-1.042c-.5-.832-1.017-1.345-1.496-1.636V11Zm2.653 2h-2.653v2h2.934a13.682 13.682 0 0 0-.281-2Zm-4.653-4.716V11h-2.087c.16-.377.338-.726.527-1.042c.521-.869 1.064-1.39 1.56-1.674Zm0 4.716h-2.717a13.682 13.682 0 0 0-.281 2h2.998v-2Zm-3.55-3.581a11.549 11.549 0 0 0-.68 1.581h-1.015a8.045 8.045 0 0 1 1.696-1.581ZM18.276 13h-1.662a7.946 7.946 0 0 0-.52 2h1.937c.04-.69.124-1.359.245-2Z" clipRule="evenodd" /><path d="M10.109 32.621c.567.602 1.13 1.2 1.66 1.96V36h7.433v-1.419c-.133-1.104-.367-3.093-.388-3.646c-.028-.778-1.072-2.196-1.072-2.196l-3.205-4.04s-.907-.958-1.426-2.02c-.52-1.063-1.624.274-1.77 1.23c-.148.956.132 1.46.132 1.46l1.83 3.638s-2.122-2.907-2.781-4.075c-.334-.592-.427-1.846-.532-3.247c-.101-1.365-.213-2.87-.568-4.04c-.72-2.37-2.802-1.777-3.163-.717c-.36 1.059-.279 8.058-.148 9.225c.103.914.654 1.808 1.275 2.816c.172.28.35.568.525.867c.696 1.192 1.45 1.993 2.198 2.785Zm26.124 1.96c.53-.76 1.093-1.358 1.66-1.96c.748-.792 1.502-1.593 2.199-2.785c.174-.3.352-.587.524-.866c.621-1.008 1.172-1.903 1.275-2.817c.131-1.167.213-8.166-.148-9.225c-.361-1.06-2.443-1.653-3.163.718c-.354 1.17-.466 2.674-.568 4.039c-.105 1.401-.198 2.655-.532 3.247c-.659 1.169-2.782 4.075-2.782 4.075l1.831-3.638s.28-.504.133-1.46c-.147-.956-1.252-2.293-1.77-1.23c-.52 1.062-1.427 2.02-1.427 2.02l-3.205 4.04s-1.044 1.418-1.072 2.196c-.02.553-.255 2.542-.388 3.646V36h7.433v-1.419ZM26 41a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v2Zm-3.998 0a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2Z" /></g></svg>
                </div>
              <div className='ml-2'>
                <h1 className='text-l md:text-2xl text-[#1F306A]' >
                  คณะศิลปศาสตร์
                </h1>
                <div>
                  <h1 className='text-l md:text-xl text-[#1F306A]'>Faculty of Liberal arts</h1>
                </div>
              </div>
            </div>

            <ul className="list-disc list-inside text-[#536878] ml-3 text-xs md:text-base  ">
              <li>สาขาวิชารัฐประศาสนศาสตร์ (รป.บ)</li>
              <li>สาขาวิชาการศึกษาปฐมวัย (ศษ.บ)</li>
            </ul>
          </div>

          <div>
            <img src="/img/faculty/Feng.png" width="400px" height="100px" />
            <div className='flex mt-3 mb-3 '>
                <div className='w-[50px] h-[50px] md:w-[65px] md:h-[65px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#1f306a" d="M1.05 21v-2.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T9.05 14q1.925 0 3.525.45t2.875 1.1q.75.375 1.175 1.1t.425 1.55V21h-16Zm2-2h12v-.8q0-.275-.138-.5t-.362-.35q-.9-.45-2.313-.9T9.05 16q-1.775 0-3.188.45t-2.312.9q-.225.125-.362.35t-.138.5v.8Zm6-6q-1.65 0-2.825-1.175T5.05 9H4.8q-.225 0-.362-.138T4.3 8.5q0-.225.138-.363T4.8 8h.25q0-1.125.55-2.025T7.05 4.55v.95q0 .225.138.363T7.55 6q.225 0 .363-.138T8.05 5.5V4.15q.225-.075.475-.113T9.05 4q.275 0 .525.038t.475.112V5.5q0 .225.138.363T10.55 6q.225 0 .363-.138t.137-.362v-.95q.9.525 1.45 1.425T13.05 8h.25q.225 0 .363.138t.137.362q0 .225-.138.363T13.3 9h-.25q0 1.65-1.175 2.825T9.05 13Zm0-2q.825 0 1.413-.588T11.05 9h-4q0 .825.588 1.413T9.05 11Zm7.5 4l-.15-.75q-.15-.05-.287-.113t-.263-.187l-.7.25l-.5-.9l.55-.5v-.6l-.55-.5l.5-.9l.7.25q.1-.1.25-.175t.3-.125l.15-.75h1l.15.75q.15.05.3.125t.25.175l.7-.25l.5.9l-.55.5v.6l.55.5l-.5.9l-.7-.25q-.125.125-.263.188t-.287.112l-.15.75h-1Zm.5-1.75q.3 0 .525-.225t.225-.525q0-.3-.225-.525t-.525-.225q-.3 0-.525.225t-.225.525q0 .3.225.525t.525.225Zm1.8-3.25l-.2-1.05q-.225-.075-.412-.188T17.9 8.5l-1.05.35l-.7-1.2l.85-.75q-.05-.125-.05-.2v-.4q0-.075.05-.2l-.85-.75l.7-1.2l1.05.35q.15-.15.338-.263t.412-.187l.2-1.05h1.4l.2 1.05q.225.075.413.188t.337.262l1.05-.35l.7 1.2l-.85.75q.05.125.05.2v.4q0 .075-.05.2l.85.75l-.7 1.2l-1.05-.35q-.15.15-.337.263t-.413.187l-.2 1.05h-1.4Zm.7-2.25q.525 0 .888-.363T20.8 6.5q0-.525-.363-.888t-.887-.362q-.525 0-.888.363T18.3 6.5q0 .525.363.888t.887.362ZM3.05 19h12h-12Z" /></svg>
                </div>  
              <div className='ml-2'>
                <h1 className='text-l md:text-2xl text-[#1F306A]'>คณะวิศวกรรมศาสตร์</h1>
                <div>
                  <h1 className='text-l md:text-xl text-[#1F306A]'>Faculty of Engineering</h1>
                </div>
              </div>
            </div>

            <ul className="list-disc list-inside text-[#536878] ml-3 text-xs md:text-base ">
              <li>สาขาวิชาวิศวกรรมยานยนต์ (วศ.บ.)</li>
            </ul>
          </div>

        </div>

      </div>


    </RootLayout>
  )
}
