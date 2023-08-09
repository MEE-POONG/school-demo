import React, { useState } from "react";
import Head from 'next/head';
import { Button, Card, Col, Dropdown, FloatingLabel, Form, Image, Row } from "react-bootstrap";
import AddModal from "@/components/modal/AddModal";
import useAxios from "axios-hooks";
import Link from "next/link";
// import { bankMap } from '@/test';
import { ImgSlider } from '@prisma/client';
import Backendlayout from "@/components/Backend/LayOut";

const ImgSliderAdd: React.FC = () => {
  const [{ error: errorMessage, loading: ImgSliderLoading }, executeImgSlider] = useAxios({ url: '/api/ImgSlider', method: 'POST' }, { manual: true });
  const [title, settitle] = useState<string>("");
  const [subtitle, setsubtitle] = useState<string>("");
  const [detail, setdetail] = useState<string>("");
  const [img, setimg] = useState<string>("");
  const [alertForm, setAlertForm] = useState<string>("not");
  const [inputForm, setInputForm] = useState<boolean>(false);
  const [checkBody, setCheckBody] = useState<string>("");
 

  const handleInputChange = (setter: any) => (event: any) => {
    const newValue = event.target.value;
    if (!isNaN(newValue) && !newValue.includes('.')) {
      setter(newValue);
    }
  };
  const reloadPage = () => {
    clear();
  };

  const clear = () => {
    settitle("");
    setsubtitle("");
    setdetail("");
    
    setAlertForm("not");
    setInputForm(false);
    setCheckBody("");
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        const splittedString = base64String.split(",")[1]; // ตัดส่วน "data:image/png;base64," ออก
        setimg(splittedString);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    let missingFields = [];
    if (!title) missingFields.push("title");
    if (!subtitle) missingFields.push("subtitle");
    if (!detail) missingFields.push("detail");
    // if (!img) missingFields.push("img");
    if (missingFields.length > 0) {
      setAlertForm("warning");
      setInputForm(true);
      setCheckBody(`กรอกข้อมูลไม่ครบ: ${missingFields.join(', ')}`);
    } else {
      try {
        setAlertForm("primary"); // set to loading

        // Prepare the data to send
        const data = {
         title,
         subtitle,
         detail,
         img,
         
        };

        const response = await executeImgSlider({ data });
        if (response && response.status === 201) {
          setAlertForm("success");
          setTimeout(() => {
            clear();
          }, 5000);
        } else {
          setAlertForm("danger");
          throw new Error('Failed to send data');
        }
      } catch (error) {
        setAlertForm("danger");
      }
    }
  };


  
  return (
    <Backendlayout>
    
      <Head>
        <title>Wellcome | MePrompt-BackOffice</title>
        <meta
          name="description"
          content="T ACTIVE"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='ImgSlider-page'>
        <Card>
          <AddModal checkAlertShow={alertForm} setCheckAlertShow={setAlertForm} checkBody={checkBody} />
          <Card.Header className="d-flex space-between">
            <h4 className="mb-0 py-1">
              ImgSlider - เพิ่มโปรโมชั่น
            </h4>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={4}>
                <FloatingLabel controlId="title" label="title / ชื่อโปรโมชั่น" className="mb-3">
                  <Form.Control
                    isValid={inputForm && title !== ""}
                    isInvalid={inputForm && title === ""}
                    type="text"
                    value={title}
                    onChange={e => settitle(e.target.value)}
                    placeholder="name@example.com"
                  />
                </FloatingLabel>
              </Col>
              <Col md={4}>
                <FloatingLabel controlId="subtitle" label="subtitle / หัวข้อย่อย" className="mb-3">
                  <Form.Control
                    isValid={inputForm && subtitle !== ""}
                    isInvalid={inputForm && subtitle === ""}
                    type="subtitle"
                    value={subtitle}
                    onChange={e => setsubtitle(e.target.value)}
                    placeholder="subtitle"
                  />
                </FloatingLabel>
              </Col>
              <Col md={4}>
                <FloatingLabel controlId="detail" label="detail / รายละเอียด" className="mb-3">
                  <Form.Control
                    isValid={inputForm && detail !== ""}
                    isInvalid={inputForm && detail === ""}
                    type="text"
                    value={detail}
                    onChange={e => setdetail(e.target.value)}
                    placeholder="detail"
                  />
                </FloatingLabel>
              </Col>
              <Col md={4}>
                <FloatingLabel controlId="img" label="img / รูปภาพ" className="mb-3">
                  <Form.Control
                    isValid={inputForm && img !== ""}
                    isInvalid={inputForm && img === ""}
                    type="file"
                    defaultValue={img}
                    onChange={handleFileUpload}
                    placeholder="img"/> 
                </FloatingLabel>
              </Col>


               
            </Row>
          </Card.Body>
          <Card.Footer className="text-end">
            <Button variant="success mx-2" onClick={handleSubmit}>
              ยืนยัน
            </Button>
            <Button variant="primary mx-2" onClick={reloadPage}>
              ล้าง
            </Button>
            <Link href="/ImgSlider" className="btn btn-danger mx-2">
              ย้อนกลับ
            </Link>
          </Card.Footer>
        </Card>
      </div>
      </Backendlayout>
  );
}
export default ImgSliderAdd;