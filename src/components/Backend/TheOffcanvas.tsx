import React, { useState } from 'react';
import { Offcanvas, Button, Nav, Image, Dropdown, NavDropdown } from 'react-bootstrap';
import { FaBars, FaRegEnvelope, FaShoppingBag, FaTachometerAlt, FaUserEdit } from 'react-icons/fa';
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface TheOffcanvasProps {
    show: boolean;
    onToggleShow: () => void;
}

const TheOffcanvas: React.FC<TheOffcanvasProps> = ({ show, onToggleShow }) => {
    const handleClose = () => onToggleShow();
    const { asPath } = useRouter();
    const [checkClickPath, setCheckClickPath] = useState<string>('/');
    useEffect(() => {
        setCheckClickPath(asPath);
    }, [asPath])
    const handlePath = (valPath: string): void => { checkClickPath === valPath ? setCheckClickPath('') : setCheckClickPath(valPath) };

    return (
        <>
            <Offcanvas show={show} onHide={handleClose} placement="start" backdrop={false} scroll={true} >
                <Offcanvas.Body className='ps-0 pe-2'>
<<<<<<< HEAD:src/components/Backend/TheOffcanvas.tsx
                <nav className=" w-[200px] font-fontTH ">
        <div
            id="sidebar"
            className="bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
            x-show="sidenav"
            // @click.away="sidenav = false"
          >
            <div className="space-y-6 md:space-y-10 mt-10">
              <h1 className="font-bold text-4xl text-center md:hidden">
                D<span className="text-teal-600">.</span>
              </h1>
              <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
                ADMIN<span className="text-teal-600">.</span>
              </h1>
              <div id="profile" className="space-y-3">
                <img
                  src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt="Avatar user"
                  className="w-[100px] md:w-[200px] rounded-full mx-auto"
                />
                <div>
                  <h2 className="font-medium text-xs md:text-sm text-center text-teal-500">
                    NAME : ADMIN
                  </h2>
                  <p className="text-xs text-gray-500 text-center">
                    ตำแหน่ง : Administrator
                  </p>
                </div>
              </div>
              <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
                <input
                  type="text"
                  className="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm text-gray-600 focus:outline-none"
                  placeholder="Search"
                />
                <button className="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block">
                  <svg
                    className="w-4 h-4 fill-current"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div id="menu" className="flex flex-col space-y-2">
                <Link
                  href="/backend/HomeBackEnd"
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
                >
                  <svg
                    className="w-6 h-6 fill-current inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  <span className="">หน้าแรก</span>
                </Link>
                <Link
                  href=""
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <svg
                    className="w-6 h-6 fill-current inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>
                  </svg>
                  <span className="">Products</span>
                </Link>
                <Link
                  href=""
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <svg
                    className="w-6 h-6 fill-current inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="">Reports</span>
                </Link>
                <Link
                  href=""
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <svg
                    className="w-6 h-6 fill-current inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path>
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path>
                  </svg>
                  <span className="">Messages</span>
                </Link>
                <Link
                  href=""
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <svg
                    className="w-6 h-6 fill-current inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="">Calendar</span>
                </Link>
                <Link
                  href=""
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <svg
                    className="w-6 h-6 fill-current inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="">Table</span>
                </Link>
                <Link
                  href=""
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <svg
                    className="w-6 h-6 fill-current inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"></path>
                  </svg>
                  <span className="">UI Components</span>
                </Link>
                <Link
                  href=""
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <svg
                    className="w-6 h-6 fill-current inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                  <span className="">Users</span>
                </Link>
              </div>
            </div>
          </div>
    </nav>
=======
                    <Link href="/" className={asPath === "/" ? "nav-link active" : "nav-link"}>
                        <i >
                            <FaTachometerAlt />
                        </i>
                        <span className="ms-2">Home</span>
                    </Link>
>>>>>>> b54c14419e2b36a0cb92ea5a2331baf28a064120:components/Backend/TheOffcanvas.tsx


                    <div id="partner" className='select-page'>
                        <Dropdown.Toggle onClick={() => handlePath('/partner')} className={asPath === "/partner" || asPath === "/partner/agent" || asPath === "/partner/member" || asPath === "/partner/member/add" ? "nav-item nav-link active" : "nav-item nav-link"} id="dropdown-custom-components" >
                            <i >
                                <FaTachometerAlt />
                            </i>
                            <span className="ms-2">Partner</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="bg-transparent border-0" show={checkClickPath === "/partner" || checkClickPath === "/partner/agent" || checkClickPath === "/partner/member" || asPath === "/partner/member/add"} >
                            <Link href="/partner" className={asPath === "/partner" || asPath === "/partner/agent" ? "nav-link active" : "nav-link"}>
                                <span>Master</span>
                            </Link>
                            <Link href="/partner/member" className={asPath === "/partner/member" || asPath === "/partner/member/add" ? "nav-link active" : "nav-link"}>
                                <span>Member</span>
                            </Link>
                        </Dropdown.Menu>
                    </div>

                    <div id="admin" className='select-page'>
                        <Dropdown.Toggle onClick={() => handlePath('/admin')} className={asPath === "/admin" /*|| asPath === "/partner/agent"*/ || asPath === "/admin/user" /*|| asPath === "/partner/member/add*/ ? "nav-item nav-link active" : "nav-item nav-link"} id="dropdown-custom-components" >
                            <i >
                                <FaTachometerAlt />
                            </i>
                            <span className="ms-2">Admin</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="bg-transparent border-0" show={checkClickPath === "/admin" /*|| checkClickPath === "/partner/agent" */ || checkClickPath === "/admin/user" /*|| asPath === "/partner/member/add"*/} >
                            <Link href="/admin" className={asPath === "/admin" /*|| asPath === "/partner/agent"*/ ? "nav-link active" : "nav-link"}>
                                <span>Admin</span>
                            </Link>
                            <Link href="/admin/user" className={asPath === "/admin/user" /*|| asPath === "/partner/member/add"*/ ? "nav-link active" : "nav-link"}>
                                <span>User</span>
                            </Link>
                        </Dropdown.Menu>
                    </div>



                    <div id="bot-auto" className='select-page'>
                        <Dropdown.Toggle onClick={() => handlePath('/bot')} className={asPath === "/bot" || asPath === "/bot/agent" ? "nav-item nav-link active" : "nav-item nav-link"} id="dropdown-custom-components" >
                            <i >
                                <FaTachometerAlt />
                            </i>
                            <span className="ms-2">Bot Auto</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="bg-transparent border-0" show={checkClickPath === "/bot" || checkClickPath === "/bot/agent" || checkClickPath === "/bot/listname"} >
                            <Link href="/bot" className={asPath === "/bot" || asPath === "/bot/agent" ? "nav-link active" : "nav-link"}>
                                <span>ได้เสียลูกค้า</span>
                            </Link>
                            <Link href="/bot" className={asPath === "/bot" || asPath === "/bot/agent" ? "nav-link active" : "nav-link"}>
                                <span>ได้เสียเอเย่น</span>
                            </Link>
                            <Link href="/bot" className={asPath === "/bot" || asPath === "/bot/agent" ? "nav-link active" : "nav-link"}>
                                <span>ได้เสียมาสเตอร์</span>
                            </Link>
                        </Dropdown.Menu>
                    </div>
                    <div id="income" className='select-page'>
                        <Dropdown.Toggle onClick={() => handlePath('/income')} className={asPath === "/income" || asPath === "/income/agent" ? "nav-item nav-link active" : "nav-item nav-link"} id="dropdown-custom-components" >
                            <i >
                                <FaTachometerAlt />
                            </i>
                            <span className="ms-2">income Auto</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="bg-transparent border-0" show={checkClickPath === "/income" || checkClickPath === "/income/agent" || checkClickPath === "/income/listname"} >
                            <Link href="/income" className={asPath === "/income" || asPath === "/income/agent" ? "nav-link active" : "nav-link"}>
                                <span>ได้เสียลูกค้า</span>
                            </Link>
                            <Link href="/income" className={asPath === "/income" || asPath === "/income/agent" ? "nav-link active" : "nav-link"}>
                                <span>ได้เสียเอเย่น</span>
                            </Link>
                            <Link href="/income" className={asPath === "/income" || asPath === "/income/agent" ? "nav-link active" : "nav-link"}>
                                <span>ได้เสียมาสเตอร์</span>
                            </Link>
                        </Dropdown.Menu>
                    </div>
                    <div id="setting" className='select-page'>
                        <Dropdown.Toggle onClick={() => handlePath('/setting')} className={asPath === "/setting" || asPath === "/setting/admin" || asPath === "/setting/admin/team" ? "nav-item nav-link active" : "nav-item nav-link"} id="dropdown-custom-components" >
                            <i >
                                <FaTachometerAlt />
                            </i>
                            <span className="ms-2">Setting</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="bg-transparent border-0" show={checkClickPath === "/setting" || checkClickPath === "/setting/admin" || checkClickPath === "/setting/admin/team"} >
                            <Link href="/setting" className={asPath === "/setting" ? "nav-link active" : "nav-link"}>
                                <span>ติดต่อเรา</span>
                            </Link>
                            <Link href="/setting/admin" className={asPath === "/setting/admin" || asPath === "/setting/admin/team" ? "nav-link active" : "nav-link"}>
                                <span>แอดมิน</span>
                            </Link>

                        </Dropdown.Menu>
                    </div>




                    <div id="about" className='select-page'>
                        <Dropdown.Toggle onClick={() => handlePath('/about')} className={asPath === "/about" || asPath === "/about/aboutclinic" || asPath === "/about/aboutpersonal" || asPath === "/about/aboutpersonal/add" ? "nav-item nav-link active" : "nav-item nav-link"} id="dropdown-custom-components" >
                            <i >
                                <FaTachometerAlt />
                            </i>
                            <span className="ms-2">about</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="bg-transparent border-0" show={checkClickPath === "/about" || checkClickPath === "/about/aboutclinic" || checkClickPath === "/about/aboutpersonal" || asPath === "/about/aboutpersonal/add"} >
                            <Link href="/about/aboutclinic" className={asPath === "/about" || asPath === "/about/aboutclinic" ? "nav-link active" : "nav-link"}>
                                <span>aboutclinic</span>
                            </Link>
                            <Link href="/about/aboutpersonal" className={asPath === "/about/aboutpersonal" || asPath === "/about/aboutpersonal/add" ? "nav-link active" : "nav-link"}>
                                <span>aboutpersonal</span>
                            </Link>
                        </Dropdown.Menu>
                    </div>





                    <div id="Contact" className='select-page'>
                        <Dropdown.Toggle onClick={() => handlePath('/contact')} className={asPath === "/contact" || asPath === "/contact/contactclinic" || asPath === "/contact/ContactSocialMedia" || asPath === "/contact/ContactSocialMedia/add" ? "nav-item nav-link active" : "nav-item nav-link"} id="dropdown-custom-components" >
                            <i >
                                <FaTachometerAlt />
                            </i>
                            <span className="ms-2">Contact</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="bg-transparent border-0" show={checkClickPath === "/contact" || checkClickPath === "/contact/contactclinic" || checkClickPath === "/contact/ContactSocialMedia" || asPath === "/contact/ContactSocialMedia/add"} >
                            <Link href="/contact/contactclinic" className={asPath === "/contact" || asPath === "/contact/contactclinic" ? "nav-link active" : "nav-link"}>
                                <span>ContactClinic</span>
                            </Link>
                            <Link href="/contact/ContactSocialMedia" className={asPath === "/contact/ContactSocialMedia" || asPath === "/contact/ContactSocialMedia/add" ? "nav-link active" : "nav-link"}>
                                <span>ContactSocialMedia</span>
                            </Link>
                        </Dropdown.Menu>
                    </div>
                    

                    <div id="service" className='select-page'>
                        <Dropdown.Toggle onClick={() => handlePath('/service')} className={asPath === "/service" || asPath === "/service/serviceclinic" || asPath === "/service/subserviceclinnic" || asPath === "/service/subserviceclinnic/add" ? "nav-item nav-link active" : "nav-item nav-link"} id="dropdown-custom-components" >
                            <i >
                                <FaTachometerAlt />
                            </i>
                            <span className="ms-2">service</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="bg-transparent border-0" show={checkClickPath === "/service" || checkClickPath === "/service/serviceclinic" || checkClickPath === "/service/subServiceclinic" || asPath === "/service/subServiceclinic/add"} >
                            <Link href="/service/serviceclinic" className={asPath === "/service" || asPath === "/service/serviceclinic" ? "nav-link active" : "nav-link"}>
                                <span>serviceclinic</span>
                            </Link>
                            <Link href="/service/subServiceclinic" className={asPath === "/service/subServiceclinic" || asPath === "/service/subServiceclinic/add" ? "nav-link active" : "nav-link"}>
                                <span>subServiceclinic</span>
                            </Link>
                        </Dropdown.Menu>
                    </div>
                    





                    <div id="promotion" className='select-page'>
                        <Dropdown.Toggle onClick={() => handlePath('/promotion')} className={asPath === "/promotion" ? "nav-item nav-link active" : "nav-item nav-link"} id="dropdown-custom-components" >
                            <i >
                                <FaTachometerAlt />
                            </i>
                            <span className="ms-2">promotion</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="bg-transparent border-0" show={checkClickPath === "/promotion" || checkClickPath === "/promotion" } >
                            <Link href="/promotion" className={asPath === "/promotion" || asPath === "/promotion" ? "nav-link active" : "nav-link"}>
                                <span>promotion</span>
                            </Link>
                            
                        </Dropdown.Menu>
                    </div>

                    <div>
                    <div id="review" className='select-page'>
                        <Dropdown.Toggle onClick={() => handlePath('/review')} className={asPath === "/review" ? "nav-item nav-link active" : "nav-item nav-link"} id="dropdown-custom-components" >
                            <i >
                                <FaTachometerAlt />
                            </i>
                            <span className="ms-2">review</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="bg-transparent border-0" show={checkClickPath === "/review" || checkClickPath === "/review" } >
                            <Link href="/review" className={asPath === "/review" || asPath === "/review" ? "nav-link active" : "nav-link"}>
                                <span>review</span>
                            </Link>
                            
                        </Dropdown.Menu>
                    </div>
                    </div>



                    <Link href="/article" className={asPath === "/article" ? "nav-link active" : "nav-link"}>
                        <i >
                            <FaTachometerAlt />
                        </i>
                        <span className="ms-2">Article</span>
                    </Link>








                    <div id="gamepond" className='select-page'>
                        <Dropdown.Toggle onClick={() => handlePath('/gamepond')} className={asPath === "/gamepond" ? "nav-item nav-link active" : "nav-item nav-link"} id="dropdown-custom-components" >
                            <i >
                                <FaTachometerAlt />
                            </i>
                            <span className="ms-2">เกมของปอนด์</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="bg-transparent border-0" show={checkClickPath === "/gamepond" || checkClickPath === "/gamepond" } >
                            <Link href="/gamepond/gameselet" className={asPath === "/gamepond/gameselet" || asPath === "/gamepond/gameselet" ? "nav-link active" : "nav-link"}>
                                <span>รวมเกม</span>
                            </Link>
                            <Link href="/gamepond/xo" className={asPath === "/gamepond/xo" || asPath === "/gamepond/xo/add" ? "nav-link active" : "nav-link"}>
                                <span>เกม XO</span>
                            </Link>
                            <Link href="/gamepond/calculator" className={asPath === "/gamepond/calculator" || asPath === "/gamepond/calculator/add" ? "nav-link active" : "nav-link"}>
                                <span>เครื่องคิดเลข</span>
                            </Link>
                        </Dropdown.Menu>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>

        </>
    );
};
const TheButtonOffcanvas: React.FC<TheOffcanvasProps> = ({ show, onToggleShow }) => {
    const handleShow = () => onToggleShow();
    return (
        <Button onClick={handleShow} bsPrefix={`slide-toggle-icon ${show ? 'active' : ''} me-auto`}>
            <FaBars />
        </Button>
    );
}
export { TheButtonOffcanvas };
export default TheOffcanvas;
