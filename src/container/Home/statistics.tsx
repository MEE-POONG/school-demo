

export default function Statistics() {
    return (
        <>
            <div className=" bg-blue-400">
                <div className="container m-auto flex justify-center flex-wrap py-8">
                    <p className=" mx-8 text-yellow-700 text-lg md:text-3xl lg:text-6xl">
                        4
                        <span className="mx-2 text-white text-lg md:text-xl lg:text-2xl">
                            คณะ
                        </span>
                    </p>
                    <p className=" mx-8 text-yellow-700 text-lg md:text-3xl lg:text-6xl">
                        20
                        <span className="mx-2 text-white text-lg md:text-xl lg:text-2xl">
                            หลักสูตร
                        </span>
                    </p>
                    <p className=" mx-8 text-yellow-700 text-lg md:text-3xl lg:text-6xl">
                        500
                        <span className="mx-2 text-white text-lg md:text-xl lg:text-2xl">
                            กำลัง
                        </span>
                    </p>
                    <p className=" mx-8 text-yellow-700 text-lg md:text-3xl lg:text-6xl">
                        1449
                        <span className="mx-2 text-white text-lg md:text-xl lg:text-2xl">
                            ผู้เข้าชม
                        </span>
                    </p>
                </div>
            </div>

            <div className="md:w-full h-2 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"></div>

        </>
    )
}