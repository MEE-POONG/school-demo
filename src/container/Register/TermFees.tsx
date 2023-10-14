import { TermFees_HEAD, TermFeesGroup, TermFeesBranch } from '@/data/TermFees';
import { Card, Typography } from '@material-tailwind/react';
import React from 'react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Autoplay]);

const TermFees: React.FC = () => {
  return (
    <>
      <Card className="h-full w-full overflow-x-auto my-8">
        <table className="table-scroll w-full table-auto text-left">
          <thead className="tuition-fees border-collapse">
            <tr>
              <th rowSpan={2} className="p-4 w-36 border border-slate-600 text-center border-l">สาขาวิชา</th>
              <th colSpan={3} className="p-4 w-72 border border-slate-600 text-center border-l">กองทุนกู้ยืม<span >*</span></th>
              <th rowSpan={2} className="p-4 w-48 border border-slate-600  border-l">ค่าเล่าเรียน<br />เทอม 1/1 (มิ.ย. – ก.ค.) </th>
              <th rowSpan={2} className="p-4 w-48 border border-slate-600  border-l">ค่าเล่าเรียน<br />เทอม 1/2</th>
              <th rowSpan={2} className="p-4 w-48 border border-slate-600  border-l">ค่าเล่าเรียนรวม<br />ตลอดหลักสูตร<span >**</span><br />(ยังไม่รวมส่วนลดทุน)    </th>
            </tr>
            <tr>
              <th className="p-4 w-24 border border-slate-600 text-center border-l" >กยศ.<br />ลักษณะที่ 1</th>
              <th className="p-4 w-24 border border-slate-600 text-center border-l" >กยศ.<br />ลักษณะที่ 2</th>
              <th className="p-4 w-24 border border-slate-600 text-center border-l" >กยศ.<br />ลักษณะที่ 3</th>
            </tr>
          </thead>
          <tbody>
            {TermFeesGroup.map((group) => (
              <React.Fragment key={group.id}>
                <tr className="bg-blue-400 text-white">
                  <td colSpan={7} className='p-4'>
                    {group.name}
                  </td>
                </tr>
                {TermFeesBranch.filter(branch => branch.TermFeesGroupID === group.id).map((branch) => (
                  <tr key={branch.id} className="even:bg-blue-gray-50/50">
                    <td className="w-36 text-center border-l p-4">{branch.FieldStudy}</td>
                    <td className="w-24 text-center border-l p-4">{branch.kysOne ? "yes" : "no"}</td>
                    <td className="w-24 text-center border-l p-4">{branch.kysTwo ? "yes" : "no"}</td>
                    <td className="w-24 text-center border-l p-4">{branch.kysThree ? "yes" : "no"}</td>
                    <td className="w-48 text-center border-l p-4">{branch.First}</td>
                    <td className="w-48 text-center border-l p-4">{branch.Second}</td>
                    <td className="w-48 text-center border-l p-4">{branch.Sum}</td>
                  </tr>
                ))}

              </React.Fragment>
            ))}
          </tbody>
        </table>

      </Card>
    </>
  );
}

export default TermFees;