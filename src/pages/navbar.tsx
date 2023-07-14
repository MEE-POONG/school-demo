export default function Navbar() {
  return (
    <nav className="bg-[#1F306A] h-[130px] font-fontTH">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center mt-[5%]">
            <div className="flex-shrink-0 mt-[]">
              {/* Your logo or brand */}
              <img
                className="h-[80px] mr-3"
                src="/img/Logo_panomwan.png"
                alt="Logo"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="">
                <p className="text-gray-300">วิทยาลัยเทคโนโลยีพนมวันท์</p>
                <hr className="w-65 h-[2px] bg-white" />
                <p className="text-gray-300">Phanomwan College of Technology</p>
              </div>
            </div>

            {/* <hr className=" w-72 h-[2px] bg-white" />
               <div className=" w-72 h-2 bg-white" ></div> */}

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* Navigation links */}
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  หน้าแรก
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  รู้จัก "พนมวันท์"
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  คณะ/หลักสูตร
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  สวัสดิการ
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  สนใจสมัครเรียน
                </a>

                {/* Add more links as needed */}
              </div>
            </div>
          </div>
          {/* Right-aligned elements */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                {/* Notification icon */}
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              {/* User avatar or profile image */}
              <img
                className="ml-3 h-8 w-8 rounded-full"
                src="/path/to/avatar.jpg"
                alt="User"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
