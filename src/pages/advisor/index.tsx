import Image from 'next/image'
import { Inter } from 'next/font/google'
import RootLayout from '@/components/layout'
import { BsBuildingFill } from "react-icons/bs";
import { IoNewspaperSharp } from "react-icons/io5";
import { PiHandCoinsBold } from "react-icons/pi";
import { GoBook } from "react-icons/go";
import { MdSupportAgent } from "react-icons/md";
import { TbStars } from "react-icons/tb";




const inter = Inter({ subsets: ['latin'] })

export default function Welfare() {
  return (
    <RootLayout>
    <div className="container mx-auto text-xl font-fontTH font-bold py-8 md:py-24 ">


    <div className='flex justify-center items-center md:hidden  '>
      <button type="button" className="items-center text-2xl w-full text-white bg-[#0000B8] hover:bg-[#6CB4EE] rounded-lg  px-5 py-2.5 mb-2 ">
      ติดต่อปรึกษา
      </button> 
    </div>



    <div className='flex justify-between'>
              <div><h1 className='text-2xl  md:text-4xl text-[#1F306A]'>ทีมที่ปรึกษา</h1></div>
              <div className='hidden md:flex'>
                <button type="button" className="text-xl text-white bg-[#0000B8] hover:bg-[#6CB4EE] rounded-lg  px-5 py-2.5 mr-2 mb-2 ">
                ติดต่อปรึกษา
                </button>
              </div>
    </div>
    <div className='bg-[#1F306A] w-full h-1  mb-7 md:mb-7'>
    </div>

    <div className='bg-[#536878] w-full h-20  flex justify-center items-center rounded-md mb-7'>
        <h1 className='text-xl  md:text-4xl text-white text-center'>ทีมที่ปรึกษา “วิทยาลัยพนมวันท์”</h1>
    </div>

        <div className="grid grid-col md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-10 mb-8">
        
            <div>
                <h5 className='text-[#536878]'>หัวหน้าที่ปรึกษา</h5>
                <div className="relative shadow-md drop-shadow-md w-[300px] h-[400px] ">
                    <img src="https://hips.hearstapps.com/ell.h-cdn.co/assets/16/02/2560x1703/gallery-1452783612-elle-alan-rickman-harry-potter-04-courtesy-of-warner-bros.jpg"
                    className="object-cover h-full w-full" alt="" />
                    <div className='absolute bottom-0 left-0 text-white bg-[#536878]/50 w-full pl-4  '>
                        <h1>อ.พรพิมล ลักขษร</h1>
                        <h6>061-019-8815</h6>
                    </div>
                </div>
            </div>   
            
            <div>
                <h5 className='text-[#536878]'>หัวหน้าที่ปรึกษา</h5>
                <div className="relative shadow-md drop-shadow-md w-[300px] h-[400px] ">
                    <img src="https://i.pinimg.com/originals/4d/bf/96/4dbf96ac202a32f891528c00fc0002c2.jpg"
                    className="object-cover h-full w-full" alt="" />
                    <div className='absolute bottom-0 left-0 text-white bg-[#536878]/50 w-full pl-4  '>
                        <h1>อ.พรพิมล ลักขษร</h1>
                        <h6>061-019-8815</h6>
                    </div>
                </div>
            </div>  

            <div>
                <h5 className='text-[#536878]'>หัวหน้าที่ปรึกษา</h5>
                <div className="relative shadow-md drop-shadow-md w-[300px] h-[400px] ">
                    <img src="https://cdn4.whatculture.com/images/2019/06/f7dd780c37dc0635-600x338.jpg"
                    className="object-cover h-full w-full" alt="" />
                    <div className='absolute bottom-0 left-0 text-white bg-[#536878]/50 w-full pl-4  '>
                        <h1>อ.พรพิมล ลักขษร</h1>
                        <h6>061-019-8815</h6>
                    </div>
                </div>
            </div>  

            <div>
                <h5 className='text-[#536878]'>หัวหน้าที่ปรึกษา</h5>
                <div className="relative shadow-md drop-shadow-md w-[300px] h-[400px] ">
                    <img src="https://images.ctfassets.net/usf1vwtuqyxm/1296BxymyCQA4Ioiu6Cwm6/902bf92e31fa7365b64d8ff6966c7618/SybilTrelawney_WB_F3_HeadshotOfTrelawney_Still_080615_Land.jpg"
                    className="object-cover h-full w-full" alt="" />
                    <div className='absolute bottom-0 left-0 text-white bg-[#536878]/50 w-full pl-4  '>
                        <h1>อ.พรพิมล ลักขษร</h1>
                        <h6>061-019-8815</h6>
                    </div>
                </div>
            </div>
            <div>
                <h5 className='text-[#536878]'>หัวหน้าที่ปรึกษา</h5>
                <div className="relative shadow-md drop-shadow-md w-[300px] h-[400px] ">
                    <img src="https://cdn.mos.cms.futurecdn.net/LmPJMvQowWfCExDaR2KjPb.png"
                    className="object-cover h-full w-full" alt="" />
                    <div className='absolute bottom-0 left-0 text-white bg-[#536878]/50 w-full pl-4  '>
                        <h1>อ.พรพิมล ลักขษร</h1>
                        <h6>061-019-8815</h6>
                    </div>
                </div>
            </div>   
            
            <div>
                <h5 className='text-[#536878]'>หัวหน้าที่ปรึกษา</h5>
                <div className="relative shadow-md drop-shadow-md w-[300px] h-[400px] ">
                    <img src="https://i.pinimg.com/originals/18/ee/9b/18ee9b00f1c52208649d91170c29993c.jpg"
                    className="object-cover h-full w-full" alt="" />
                    <div className='absolute bottom-0 left-0 text-white bg-[#536878]/50 w-full pl-4  '>
                        <h1>อ.พรพิมล ลักขษร</h1>
                        <h6>061-019-8815</h6>
                    </div>
                </div>
            </div>  

            <div>
                <h5 className='text-[#536878]'>หัวหน้าที่ปรึกษา</h5>
                <div className="relative shadow-md drop-shadow-md w-[300px] h-[400px] ">
                    <img src="https://i.pinimg.com/originals/35/fc/34/35fc34acafe0b25e6eff40acc0b66750.jpg"
                    className="object-cover h-full w-full" alt="" />
                    <div className='absolute bottom-0 left-0 text-white bg-[#536878]/50 w-full pl-4  '>
                        <h1>อ.พรพิมล ลักขษร</h1>
                        <h6>061-019-8815</h6>
                    </div>
                </div>
            </div>  

            <div>
                <h5 className='text-[#536878]'>หัวหน้าที่ปรึกษา</h5>
                <div className="relative shadow-md drop-shadow-md w-[300px] h-[400px] ">
                    <img src="https://i.insider.com/6179b57a38046100183efe5b?width=700"
                    className="object-cover h-full w-full" alt="" />
                    <div className='absolute bottom-0 left-0 text-white bg-[#536878]/50 w-full pl-4  '>
                        <h1>อ.พรพิมล ลักขษร</h1>
                        <h6>061-019-8815</h6>
                    </div>
                </div>
            </div>    



        </div>






        <div className="grid grid-col md:grid-cols-2 lg:grid-cols-3  justify-center items-center  gap-10 mb-8">
        
            



        </div>

        
    </div>
</RootLayout>

  )
}
