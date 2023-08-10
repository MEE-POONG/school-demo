export default function LogoPanomwan(){
    return(
        <a href="./" className="flex">
        <div className="flex-shrink-0 mt-[]">
          {/* Your logo or brand */}
          <img
            className="h-[70px] mr-3"
            src="/img/Logo_panomwan.png"
            alt="Logo"
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="">
            <p className="text-gray-300 text-lg/[20px]">
              วิทยาลัยเทคโนโลยีพนมวันท์
            </p>
            <hr className="w-65 h-[2px] bg-white" />
            <p className="text-gray-300 text-lg/[20px]">
              Phanomwan College of Technology
            </p>
          </div>
        </div>
      </a>
    )
}