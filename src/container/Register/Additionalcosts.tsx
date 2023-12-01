const AdditionnalCosts: React.FC = () => {
    return (
        <div className="mt-5">
            <h2 className="text-xl text-amber-700">**ค่าใช้จ่ายเพิ่มเติม**</h2>
            <div className="bg-white p-5 rounded-lg shadow-lg">
                <p className="font-semibold">หลักสูตร 4ปี ภาคปกติ</p>
                <ul className="list-disc list-inside text-xs md:text-base">
                    <li>ค่าสมัคร, ซัมเมอร์ตลอดหลักสูตร รวม 9,000 บาท</li>
                    <li>ค่าขอจบการศึกษา, ขึ้นทะเบียนบัณฑิต, สอบโทอิค, รับปริญญาบัตร, ค่าเข้ารับ, ชุดครุย, รูปถ่าย ,กรอบหลุยส์ (เล็ก/ใหญ่) รวม 23,000 บาท </li>
                </ul>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-lg mt-5">
                <p className="font-semibold">หลักสูตร 2ปี เทียบโอน</p>
                <ul className="list-disc list-inside text-xs md:text-base">
                    <li>ค่าสมัคร, ซัมเมอร์ตลดหลักสูตร รวม 9,000 บาท</li>
                    <li>ค่าขอจบการศึกษา, ขึ้นทะเบียนบัณฑิต, สอบโทอิค, รับปริญญาบัตร, ค่าเข้ารับ, ชุดครุย, รูปถ่าย ,กรอบหลุยส์ (เล็ก/ใหญ่) รวม 20,000 บาท </li>
                </ul>
            </div>

            <h2 className="text-xl text-amber-700 mt-5">**การกู้ยืม**</h2>
            <div className="bg-white p-5 rounded-lg shadow-lg">
                <p className="font-semibold">กองทุนกู้ยืม (กยศ.)</p>
                <ul className="list-disc list-inside text-xs md:text-base">
                    <li>อายุไม่กิน 30ปี สามารถกู้ได้</li>
                </ul>
                <p className="font-semibold mt-2">เอกสารที่ใช้ในการสมัคร</p>
                <ul className="list-disc list-inside text-xs md:text-base">
                    <li>สำเนาวุฒิการศึกษา 3 ใบ</li>
                    <li>สำเนาบัตรประชาชน, สำเนาทะเบียนบ้าน อย่างละ 5 ใบ </li>
                    <li>สำเนาบัตรประชาชน, สำเนาทะเบียนบ้านของบิดา-มารดา อย่างละ 5 ใบ </li>
                    <li>รูปถ่ายชุดสูท ขนาด 1 นิ้วครึ่ง จำนวน 8 ใบ</li>
                </ul>
            </div>

        </div>
    )

}
export default AdditionnalCosts;
