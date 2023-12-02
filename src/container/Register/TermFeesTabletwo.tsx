import { TermGroup, TermList } from "@/data/TermFees";
import { Card } from "@material-tailwind/react";
import React from "react";
import { CourseGroup as PrismaCourseGroup, CourseList } from '@prisma/client';

interface CourseGroup extends PrismaCourseGroup {
  CourseList: CourseList[];
}
interface TermFeesProps {
  list: CourseGroup[];
}

const TermFeesTabletwo: React.FC<TermFeesProps> = ({ list }) => {
  return (
    <>
      <h3 className="text-xl font-semibold text-amber-700 mt-8 mb-2">ตารางแสดงค่าใช้จ่ายตลอดหลักสูตร ปริญญาตรี (สมทบ) </h3>
      <Card className=" w-full overflow-x-auto ">
        <table className="w-full table-auto text-left">
          <thead className="tuition-fees border-collapse">
            <tr>
              <th
                rowSpan={2}
                className="p-4 w-56 border border-slate-600 text-center border-l"
              >
                สาขาวิชา
              </th>
              <th
                rowSpan={2}
                className="p-4 w-32 border border-slate-600  border-l"
              >
                ค่าเทียบโอน
              </th>
              <th
                rowSpan={2}
                className="p-4 w-32 border border-slate-600  border-l"
              >
                เรียน ปกติ
                <br />
                (จบ ม.6/ปวช./เทียบเท่า)
              </th>
            </tr>
          </thead>
          <tbody>
            {list && list
              .filter(group => group.CourseList.some(branch => branch.associate))
              .map((group) => (
                <React.Fragment key={group.id}>
                  <tr className="bg-blue-400 text-white">
                    <td colSpan={7} className="p-4">
                      {group.nameTH} {`"${group.nameEN}"`}
                    </td>
                  </tr>
                  {group.CourseList.filter(branch => branch.associate).map((branch) => (
                    <tr key={branch.id} className="even:bg-blue-gray-50/50">
                      <td className="w-56 text-center border-l p-4">
                        {branch.FieldStudy}
                      </td>
                      <td className="w-32 text-center border-l p-4">
                        {branch.associateFirst}
                      </td>
                      <td className="w-32 text-center border-l p-4">
                        {branch.associateSecond}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
          </tbody>
        </table>
      </Card>
    </>
  );
};

export default TermFeesTabletwo;
