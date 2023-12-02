import { CourseGroup, CourseList } from "@/data/TermFees";
import { Card } from "@material-tailwind/react";
import useAxios from "axios-hooks";
import React, { useEffect } from "react";


const TermFees: React.FC = () => {

  // const [{ data, loading, error }, getCourseGroup] = useAxios({
  //   url: `/api/CourseGroup`,
  //   method: "GET",
  // });

  // const [{ data, loading, error }, getCourseList] = useAxios({
  //   url: `/api/CourseGroup`,
  //   method: "GET",
  // });

  // useEffect(() => {
  //   console.log("data : ",data);
  // }, [data]);
  return (
    <>
      <Card className="h-full w-full overflow-x-auto my-8">
        <h3 className="text-xl font-semibold mb-2">ตารางแสดงค่าใช้จ่ายตลอดหลักสูตร ปริญญาตรี (ปกติ) </h3>
        <table className="table-scroll w-full table-auto text-left">
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
            {CourseGroup.map((group) => (
              <React.Fragment key={group.id}>
                <tr className="bg-blue-400 text-white">
                  <td colSpan={7} className="p-4">
                    {group.name}
                  </td>
                </tr>
                {CourseList.filter(
                  (branch) => branch.TermFeesGroupID === group.id
                ).map((branch) => (
                  <tr key={branch.id} className="even:bg-blue-gray-50/50">
                    <td className="w-56 text-center border-l p-4">
                      {branch.FieldStudy}
                    </td>
                    <td className="w-32 text-center border-l p-4">
                      {branch.First}
                    </td>
                    <td className="w-32 text-center border-l p-4">
                      {branch.Second}
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

export default TermFees;
