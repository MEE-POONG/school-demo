"use strict";
exports.__esModule = true;
var google_1 = require("next/font/google");
var TheLayout_1 = require("@/components/TheLayout");
var react_1 = require("react");
var router_1 = require("next/router");
var axios_1 = require("axios");
var link_1 = require("next/link");
var inter = google_1.Inter({ subsets: ['latin'] });
function Sum() {
    var router = router_1.useRouter();
    var _a = react_1.useState(""), inid = _a[0], setInid = _a[1];
    var _b = react_1.useState({
        regIdpersonal: "",
        regBirth: "",
        regPrefix: "",
        regSex: "",
        regNation: "",
        regName: "",
        regLastname: "",
        regEname: "",
        regElastname: "",
        regPhone: "",
        regEmail: "",
        regImg: "",
        regSchool: "",
        regDegree: "",
        regGpa: "",
        regProgram: "",
        regFaculty: "",
        regMajor: ""
    }), formData = _b[0], setFormData = _b[1];
    react_1.useEffect(function () {
        var idFromQuery = router.query.id;
        if (typeof idFromQuery === "string") {
            setInid(idFromQuery);
            // Make API call here using the updated inid value
            axios_1["default"].get("/api/registerForm/" + idFromQuery)
                .then(function (response) {
                // Handle the response data
                // console.log(response);
                setFormData(response.data);
            })["catch"](function (error) {
                // Handle errors
            });
        }
    }, [router.query.id]);
    return (react_1["default"].createElement(TheLayout_1["default"], null,
        react_1["default"].createElement("div", { className: 'container mx-auto md:py-24 py-12' },
            react_1["default"].createElement("div", { className: 'flex justify-between' },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h1", { className: 'text-2xl  md:text-5xl text-[#1F306A]' }, "\u0E2A\u0E23\u0E38\u0E1B\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25")),
                react_1["default"].createElement("div", { className: 'self-end' },
                    react_1["default"].createElement(link_1["default"], { href: "/register" },
                        " ",
                        react_1["default"].createElement("h1", { className: 'text-2xl  md:text-3xl  text-[#1F306A]' }, "\u0E01\u0E25\u0E31\u0E1A"),
                        " "))),
            react_1["default"].createElement("div", { className: 'bg-[#1F306A] w-full h-1  mb-7  ' }),
            react_1["default"].createElement("div", { className: '' },
                react_1["default"].createElement("div", { className: ' outline outline-1  drop-shadow-xl shadow-xl' },
                    react_1["default"].createElement("div", { className: 'bg-black bg-opacity-80 w-full h-[50px] drop-shadow-md  shadow-md ' },
                        react_1["default"].createElement("h1", { className: 'text-3xl text-[#FFBF00] p-2' }, " \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1C\u0E39\u0E49\u0E2A\u0E21\u0E31\u0E04\u0E23")),
                    react_1["default"].createElement("div", { className: ' md:grid md:grid-cols-12 grid-cols-1 pb-2 pt-4 ' },
                        react_1["default"].createElement("div", { className: 'col-start-1 col-end-4 md:md:text-right p-3 my-2' },
                            react_1["default"].createElement("label", { className: '' }, "\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E15\u0E31\u0E27\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19:")),
                        react_1["default"].createElement("div", { className: ' col-span-2 my-2' },
                            react_1["default"].createElement("input", { readOnly: true, defaultValue: formData.regIdpersonal, name: 'regIdpersonal', type: "text", className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" })),
                        react_1["default"].createElement("div", { className: 'col-start-6 col-end-8 md:md:text-right p-3 my-2 ' },
                            react_1["default"].createElement("label", { className: '' }, "\u0E27\u0E31\u0E19/\u0E40\u0E14\u0E37\u0E2D\u0E19/\u0E1B\u0E35\u0E40\u0E01\u0E34\u0E14:")),
                        react_1["default"].createElement("div", { className: 'col-span-2 my-2' },
                            react_1["default"].createElement("input", { readOnly: true, defaultValue: formData.regBirth, name: 'regBirth', type: "date", className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-2  leading-tight focus:outline-none focus:bg-white" })),
                        react_1["default"].createElement("div", { className: 'col-start-2 col-end-4 md:md:text-right p-3 my-2' },
                            react_1["default"].createElement("label", { className: '' }, "\u0E04\u0E33\u0E19\u0E33\u0E2B\u0E19\u0E49\u0E32\u0E0A\u0E37\u0E48\u0E2D:")),
                        react_1["default"].createElement("div", { className: ' col-span-1 md:col-span-2  md:my-2' },
                            react_1["default"].createElement("input", { readOnly: true, defaultValue: formData.regPrefix, name: 'regPrefix', className: ' block w-full md:w-1/2 bg-gray-200 text-gray-700 border border-black rounded py-3 px-2  leading-tight focus:outline-none focus:bg-white' })),
                        react_1["default"].createElement("div", { className: 'col-start-5 md:col-start-6 md:text-right p-3 my-2 ' },
                            react_1["default"].createElement("label", { className: '' }, "\u0E40\u0E1E\u0E28:")),
                        react_1["default"].createElement("div", { className: 'col-span-1 md:col-span-2 my-2' },
                            react_1["default"].createElement("input", { readOnly: true, defaultValue: formData.regSex, name: 'regSex', className: ' block w-full md:w-28   bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white' })),
                        react_1["default"].createElement("div", { className: 'col-start-7 md:col-start-9 md:text-right p-3 my-2 ' },
                            react_1["default"].createElement("label", { className: '' }, "\u0E2A\u0E31\u0E0D\u0E0A\u0E32\u0E15\u0E34: ")),
                        react_1["default"].createElement("div", { className: 'col-span-2 my-2 md:ml-2' },
                            react_1["default"].createElement("input", { readOnly: true, defaultValue: formData.regNation, name: 'regNation', type: "text", className: "appearance-none block w-full md:w-2/3 bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" })),
                        react_1["default"].createElement("div", { className: 'col-start-2 col-end-4 md:text-right p-3 my-2' },
                            react_1["default"].createElement("label", { className: '' }, "\u0E0A\u0E37\u0E48\u0E2D:")),
                        react_1["default"].createElement("div", { className: ' col-span-2 my-2' },
                            react_1["default"].createElement("input", { readOnly: true, defaultValue: formData.regName, name: 'regName', type: "text", className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" })),
                        react_1["default"].createElement("div", { className: 'col-start-6 col-end-8 md:text-right p-3 my-2 ' },
                            react_1["default"].createElement("label", { className: '' }, "\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25:")),
                        react_1["default"].createElement("div", { className: 'col-span-2 my-2' },
                            react_1["default"].createElement("input", { readOnly: true, defaultValue: formData.regLastname, name: 'regLastname', type: "text", className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" })),
                        react_1["default"].createElement("div", { className: 'col-start-2 col-end-4 md:text-right p-3 my-2' },
                            react_1["default"].createElement("label", { className: '' }, "Name:")),
                        react_1["default"].createElement("div", { className: ' col-span-2 my-2' },
                            react_1["default"].createElement("input", { readOnly: true, defaultValue: formData.regEname, name: 'regEname', type: "text", className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" })),
                        react_1["default"].createElement("div", { className: 'col-start-6 col-end-8 md:text-right p-3 my-2 ' },
                            react_1["default"].createElement("label", { className: '' }, "Surname:")),
                        react_1["default"].createElement("div", { className: 'col-span-2 my-2' },
                            react_1["default"].createElement("input", { readOnly: true, defaultValue: formData.regElastname, name: 'regElastname', type: "text", className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" })),
                        react_1["default"].createElement("div", { className: 'col-start-2 col-end-4 md:text-right p-3 my-2' },
                            react_1["default"].createElement("label", { className: '' }, "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D:")),
                        react_1["default"].createElement("div", { className: ' col-span-2 my-2' },
                            react_1["default"].createElement("input", { readOnly: true, defaultValue: formData.regPhone, name: 'regPhone', type: "text", className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" })),
                        react_1["default"].createElement("div", { className: 'col-start-7 col-end-8 md:text-right p-3 my-2 ' },
                            react_1["default"].createElement("label", { className: '' }, "Email:")),
                        react_1["default"].createElement("div", { className: 'col-span-2 my-2 ' },
                            react_1["default"].createElement("input", { readOnly: true, defaultValue: formData.regEmail, name: 'regEmail', type: "email", className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" })),
                        react_1["default"].createElement("div", { className: 'col-start-2 col-end-4 md:text-right p-3 my-2' },
                            react_1["default"].createElement("label", { className: '' }, "\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E :")),
                        react_1["default"].createElement("div", { className: 'md:col-span-4 md:my-2 md:self-center md:flex md:justify-center flex items-center pb-4 md:pb-0 ' },
                            react_1["default"].createElement("img", { src: "https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/" + formData.regImg + "/public", alt: "Profile Image" })))),
                react_1["default"].createElement("div", { className: ' outline outline-1  drop-shadow-xl shadow-xl my-10 pb-2 ' },
                    react_1["default"].createElement("div", { className: 'bg-black bg-opacity-80 w-full h-[50px] drop-shadow-md  shadow-md ' },
                        react_1["default"].createElement("h1", { className: 'text-3xl text-[#FFBF00] p-2' }, "\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32")),
                    react_1["default"].createElement("div", { className: 'md:grid md:grid-cols-12 grid-cols-1 pt-4 ' },
                        react_1["default"].createElement("div", { className: 'col-start-2 col-end-4 md:text-right p-3 my-2' },
                            react_1["default"].createElement("label", { className: '' }, "\u0E2A\u0E16\u0E32\u0E1A\u0E31\u0E19\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32:")),
                        react_1["default"].createElement("div", { className: ' col-span-6 my-2' },
                            react_1["default"].createElement("input", { readOnly: true, defaultValue: formData.regSchool, name: 'regSchool', type: "text", className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" })),
                        react_1["default"].createElement("div", { className: 'col-start-2 col-end-4 md:text-right p-3 my-2' },
                            react_1["default"].createElement("label", { className: '' }, "\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E23\u0E30\u0E14\u0E31\u0E1A:")),
                        react_1["default"].createElement("div", { className: ' col-span-2 my-2' },
                            react_1["default"].createElement("input", { readOnly: true, defaultValue: formData.regDegree, name: 'regDegree', className: '  text-sm block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white' })),
                        react_1["default"].createElement("div", { className: 'col-start-6 col-end-8 md:text-right p-3 my-2 ' },
                            react_1["default"].createElement("label", { className: '' }, "\u0E40\u0E01\u0E23\u0E14\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22")),
                        react_1["default"].createElement("div", { className: 'col-span-2 my-2' },
                            react_1["default"].createElement("input", { readOnly: true, defaultValue: formData.regGpa, name: 'regGpa', type: "text", className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" })))),
                react_1["default"].createElement("div", { className: ' outline outline-1  drop-shadow-xl shadow-xl my-10 pb-2 ' },
                    react_1["default"].createElement("div", { className: 'bg-black bg-opacity-80 w-full h-[50px] drop-shadow-md  shadow-md ' },
                        react_1["default"].createElement("h1", { className: 'text-3xl text-[#FFBF00] p-2' }, "\u0E04\u0E13\u0E30/\u0E2A\u0E32\u0E02\u0E32")),
                    react_1["default"].createElement("div", { className: 'md:grid md:grid-cols-12 grid-cols-1 ' },
                        react_1["default"].createElement("div", { className: 'col-start-2 col-end-4 md:text-right p-3 my-2' },
                            react_1["default"].createElement("label", { className: '' }, "\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23:")),
                        react_1["default"].createElement("div", { className: ' col-span-1 my-2' },
                            react_1["default"].createElement("input", { readOnly: true, defaultValue: formData.regSchool, name: 'regSchool', type: "text", className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" })),
                        react_1["default"].createElement("div", { className: 'col-start-2 col-end-4 md:text-right p-3 my-2' },
                            react_1["default"].createElement("label", { className: '' }, "\u0E04\u0E13\u0E30:")),
                        react_1["default"].createElement("div", { className: ' col-span-2 my-2' },
                            react_1["default"].createElement("input", { readOnly: true, defaultValue: formData.regFaculty, name: 'regFaculty', className: '  text-sm block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white' })),
                        react_1["default"].createElement("div", { className: 'col-start-6 col-end-8 md:text-right p-3 my-2 ' },
                            react_1["default"].createElement("label", { className: '' }, "\u0E2A\u0E32\u0E02\u0E32:")),
                        react_1["default"].createElement("div", { className: 'col-span-2 my-2' },
                            react_1["default"].createElement("input", { readOnly: true, defaultValue: formData.regMajor, name: 'regMajor', className: '  text-sm block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white' })))),
                react_1["default"].createElement("div", { className: 'flex justify-center' },
                    react_1["default"].createElement(link_1["default"], { href: "/" },
                        react_1["default"].createElement("button", { className: 'bg-black bg-opacity-80  text-[#FFBF00] rounded w-56 h-20 text-3xl' }, "\u0E01\u0E25\u0E31\u0E1A\u0E2A\u0E39\u0E48\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01")))))));
}
exports["default"] = Sum;
