import { ImgNewSlider } from '@prisma/client';
import React, { useState } from 'react';
import { Badge, Col, Form, InputGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaRegEye, FaSearch, FaUserNinja } from 'react-icons/fa';
interface ImgSliderAddImgSliderModalProps {
    data: ImgNewSlider ; // replace this with the actual type of your data
}
const ImgSliderAddImgSliderModal: React.FC<ImgSliderAddImgSliderModalProps> = ({ data }) => {
    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="mx-1 btn gold" bsPrefix="icon" onClick={handleShow}>
                <FaUserNinja />
                <span className="h-tooltiptext">เพิ่มโปรโมชั่น</span>
            </Button>
            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>โปรโมชั่น </Modal.Title>
                    <InputGroup className="w-auto mx-auto" bsPrefix="input-icon">
                        <InputGroup.Text id="basic-addon1">
                            <FaSearch />
                        </InputGroup.Text>
                        <Form.Control
                            placeholder="title"
                            aria-label="title"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm="12">
                            <div className='text-center'>Master</div>
                            <Badge className="mx-1" bg="info">
                                Info
                            </Badge>
                        </Col>
                        <Col sm="12">
                            <div className='text-center'>Agent</div>
                            <Badge className="mx-1" bg="info">
                                Info
                            </Badge>
                        </Col>
                    </Row>
                </Modal.Body >
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        ปิด
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    );
}

export default ImgSliderAddImgSliderModal;
