import { TermFees_HEAD, TermFeesGroup, TermFeesBranch } from '@/data/TermFees';
import { Card, Typography } from '@material-tailwind/react';
import React from 'react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Autoplay]);

const TermFees: React.FC = () => {
  return (
    <>
      <Card className="h-full w-full overflow-scroll my-8">
        <table className="w-full min-w-max table-auto text-left ">
          <thead className="tuition-fees border-collapse">
            <tr>
              <th rowSpan={2} className="p-4 border border-slate-600 text-center">สาขาวิชา</th>
              <th colSpan={3} className="p-4 border border-slate-600 text-center">กองทุนกู้ยืม<span >*</span></th>
              <th rowSpan={2} className="p-4 border border-slate-600 text-center">ค่าเล่าเรียน<br />เทอม 1/1 (มิ.ย. – ก.ค.) </th>
              <th rowSpan={2} className="p-4 border border-slate-600 text-center">ค่าเล่าเรียน<br />เทอม 1/2</th>
              <th rowSpan={2} className="p-4 border border-slate-600 text-center">ค่าเล่าเรียนรวม<br />ตลอดหลักสูตร<span >**</span><br />(ยังไม่รวมส่วนลดทุน)    </th>
            </tr>
            <tr>
              <th className="p-4 border border-slate-600 text-center" >กยศ.<br />ลักษณะที่ 1</th>
              <th className="p-4 border border-slate-600 text-center" >กยศ.<br />ลักษณะที่ 2</th>
              <th className="p-4 border border-slate-600 text-center" >กยศ.<br />ลักษณะที่ 3</th>
            </tr>
          </thead>
          <tbody>
            {TermFeesGroup.map((group) => (
              <React.Fragment key={group.id}>
                {/* Render the faculty/group name */}
                <tr>
                  <td colSpan={7} className='p-4'>
                    {group.name}
                  </td>
                </tr>
                {/* Render the branches for this faculty/group */}
                {TermFeesBranch.filter(branch => branch.TermFeesGroupID === group.id).map((branch) => (
                  <tr key={branch.id}>
                    <td className="text-center p-4">{branch.FieldStudy}</td>
                    <td className="text-center p-4">{branch.kysOne ? "yes" : "no"}</td>
                    <td className="text-center p-4">{branch.kysTwo ? "yes" : "no"}</td>
                    <td className="text-center p-4">{branch.kysThree ? "yes" : "no"}</td>
                    <td className="text-center p-4">{branch.First}</td>
                    <td className="text-center p-4">{branch.Second}</td>
                    <td className="text-center p-4">{branch.Sum}</td>
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