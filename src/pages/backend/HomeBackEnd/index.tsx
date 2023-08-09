import React, { useEffect, useState } from "react";
import Head from "next/head";
// import LayOut from "@/components/LayOut";
import {
  Badge,
  Card,
  Button,
  Image,
  Form,
  InputGroup,
  Table,
} from "react-bootstrap";
import { FaPen, FaSearch } from "react-icons/fa";
import PageSelect from "@/components/Backend/PageSelect";
import Link from "next/link";
import useAxios from "axios-hooks";
// import { bankMap } from "@/test";
// import DeleteModal from "@/components/modal/DeleteModal";
// import ImgSliderAddImgSliderModal from "@/container/ImgSlider/AddImgSlider";
// import { ImgSlider } from '@prisma/client';
import { ImgSlider } from "@prisma/client";
import Backendlayout from "@/components/Backend/LayOut";


interface Params {
  page: number;
  pageSize: number;
  searchTerm: string;
  totalPages: number;
}
const ImgSlider: React.FC = () => {
  const [params, setParams] = useState<Params>({
    page: 1,
    pageSize: 10,
    searchTerm: "",
    totalPages: 1,
  });

  const [{ data: ImgSliderData }, getImgSlider] = useAxios({
    url: `/api/ImgSlider?page=${params.page}&pageSize=${params.pageSize}&searchTerm=${params.searchTerm}`,
    method: "GET",
  });

  const [
    { loading: deleteImgSliderLoading, error: deleteImgSliderError },
    executeImgSliderDelete,
  ] = useAxios({}, { manual: true });

  const [filteredImgSlidersData, setFilteredImgSlidersData] = useState<
    ImgSlider[]
  >([]);

  useEffect(() => {
    setFilteredImgSlidersData(ImgSliderData?.ImgSlider ?? []);
    console.log(ImgSliderData);
  }, [ImgSliderData]);

  const deleteImgSlider = (id: string): Promise<any> => {
    return executeImgSliderDelete({
      url: "/api/ImgSlider/" + id,
      method: "DELETE",
    }).then(() => {
      setFilteredImgSlidersData((prevImgSliders) =>
        prevImgSliders.filter((ImgSlider) => ImgSlider.id !== id)
      );
    });
  };

  const handleChangePage = (page: number) => {
    setParams((prevParams) => ({
      ...prevParams,
      page: page,
    }));
  };

  const handleChangePageSize = (size: number) => {
    setParams((prevParams) => ({
      ...prevParams,
      page: 1,
      pageSize: size,
    }));
  };

  const handleChangeSearchTerm = (search: string) => {
    setParams((prevParams) => ({
      ...prevParams,
      searchTerm: search,
    }));
  };

  return (
    <>
      <Backendlayout>
     
      </Backendlayout>
    </>

    // <Backendlayout>

    //   <div classNameNameName='partner-page h-100'>
    //     <Card classNameNameName="h-100">
    //       <Card.Header classNameNameName="d-flex space-between">
    //         <h4 classNameNameName="mb-0 py-1">
    //           ImgSlider
    //         </h4>
    //         <InputGroup classNameNameName="w-auto" bsPrefix="input-icon">
    //           <InputGroup.Text id="basic-addon1">
    //             <FaSearch />
    //           </InputGroup.Text>
    //           <Form.Control
    //             onChange={e => handleChangeSearchTerm(e.target.value)}
    //             placeholder="ค้นหาโปรโมชั่น"
    //             aria-label="Fullname"
    //             aria-describedby="basic-addon1"
    //           />
    //         </InputGroup>
    //         {/* <AddListName /> */}
    //         <Link href="/ImgSlider/game" classNameNameName="ms-2 btn icon icofn-primary">
    //           เกมจับผิดภาพ
    //         </Link>
    //         <Link href="/ImgSlider/addImgSlider" classNameNameName="ms-2 btn icon icofn-primary">
    //           เพิ่มโปรโมชั่น
    //         </Link>
    //       </Card.Header>
    //       <Card.Body classNameNameName="p-0">
    //         <Table striped bordered hover classNameNameName="scroll">
    //           <thead>
    //             <tr>
    //               <th classNameNameName="no">No</th>
    //               <th classNameNameName="title">ชื่อโปรโมชั่น</th>
    //               <th classNameNameName="subtitle">คำอธิบายย่อย</th>
    //               <th>รายละเอียด</th>
    //               <th>รูปภาพ</th>
    //               <th>จัดการ</th>
    //               <th>จัดการ</th>
    //             </tr>
    //           </thead>

    //           {/* <tbody classNameNameName="text-center">
    //             {filteredImgSlidersData.map((ImgSlider, index) => (
    //               <tr key={ImgSlider.id}>
    //                 <td>{index + 1}</td>
    //                 {/* <td>{ImgSlider.img1}</td>
    //                 <td>{ImgSlider.img2}</td>
    //                 <td>{ImgSlider.img3}</td>
    //                 <td>{ImgSlider.img4}</td>
    //                 <td>{ImgSlider.img5}</td>
    //                 <td>{ImgSlider.img6}</td> */} */}
    //                 {/* <td><Image src={`data:image/png;base64, ${ImgSlider.img1}`} alt="ImgSlider imge" thumbnail /></td>
    //                 <td><Image src={`data:image/png;base64, ${ImgSlider.img2}`} alt="ImgSlider imge" thumbnail /></td>
    //                 <td><Image src={`data:image/png;base64, ${ImgSlider.img3}`} alt="ImgSlider imge" thumbnail /></td>
    //                 <td><Image src={`data:image/png;base64, ${ImgSlider.img4}`} alt="ImgSlider imge" thumbnail /></td>
    //                 <td><Image src={`data:image/png;base64, ${ImgSlider.img5}`} alt="ImgSlider imge" thumbnail /></td>
    //                 <td><Image src={`data:image/png;base64, ${ImgSlider.img6}`} alt="ImgSlider imge" thumbnail /></td> */}

    //                 {/* <img src={ImgSlider.img} alt="ImgSlider" /> */}

    //                 {/* <td>  */}
    //                   {/* <ImgSliderAddImgSliderModal data={ImgSlider} /> */}
    //                   {/* <EditImgSliderModal data={ImgSlider} apiEdit={() => editImgSlider(editList)} /> */}
    //                   {/* <Link href={`/ImgSlider/edit/${ImgSlider.id}`} classNameNameName="mx-1 btn info icon icon-primary"> */}
    //                     {/* <FaPen /> */}
    //                     {/* <span classNameNameName="h-tooltiptext">แก้ไขข้อมูล</span> */}
    //                   {/* </Link> */}
    //                   {/* <DeleteModal data={ImgSlider} apiDelete={() => deleteImgSlider(ImgSlider.id)} /> */}
    //                 {/* </td> */}

    //               {/* </tr>
    //             ))} */}

    //           {/* </tbody> */}
    //         </Table>
    //       </Card.Body>
    //       <Card.Footer>
    //         {/* <PageSelect page={params.page} totalPages={ImgSliderData?.pagination?.total} onChangePage={handleChangePage} onChangePageSize={handleChangePageSize} /> */}
    //             {/* <PageSelect page={0} totalPages={0} onChangePage={function (size: number): void {
    //                       throw new Error("Function not implemented.");
    //                   } } onChangePageSize={function (size: number): void {
    //                       throw new Error("Function not implemented.");
    //                   } }/> */}
    //       </Card.Footer>
    //     </Card>

    //   </div>
    //   </Backendlayout>
  );
};
export default ImgSlider;
