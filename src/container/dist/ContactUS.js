"use strict";
exports.__esModule = true;
exports.ContactUS = void 0;
var react_1 = require("react");
var react_2 = require("@material-tailwind/react");
var fa_1 = require("react-icons/fa");
var aos_1 = require("aos");
exports.ContactUS = function () {
    react_1.useEffect(function () {
        aos_1["default"].init({
            duration: 1000
        });
    }, []);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "container m-auto my-8 flex justify-around flex-wrap" },
            react_1["default"].createElement("div", { className: "p-4 w-full sm:w-1/2 lg:w-1/3 flex justify-center drop-shadow-lg", "data-aos": "fade-up", "data-aos-delay": "200", "data-aos-duration": "100" },
                react_1["default"].createElement(react_2.Card, { className: "w-full  bg-white" },
                    react_1["default"].createElement(react_2.CardBody, null,
                        react_1["default"].createElement(fa_1.FaEnvelope, { className: "h-8 w-8 lg:h-12 lg:w-12 mb-3 text-yellow-800" }),
                        react_1["default"].createElement(react_2.Typography, { variant: "h5", color: "blue-gray", className: "mb-2 text-yellow-800" }, "Email Us"),
                        react_1["default"].createElement(react_2.Typography, { className: "text-sm font-semibold leading-6 text-black" },
                            "phanomwanu@gmail.com",
                            react_1["default"].createElement("br", null))))),
            react_1["default"].createElement("div", { className: "p-4 w-full sm:w-1/2 lg:w-1/3 flex justify-center drop-shadow-lg", "data-aos": "fade-up", "data-aos-delay": "200", "data-aos-duration": "100" },
                react_1["default"].createElement(react_2.Card, { className: "w-full  bg-white" },
                    react_1["default"].createElement(react_2.CardBody, null,
                        react_1["default"].createElement(fa_1.FaSearchLocation, { className: "h-8 w-8 lg:h-12 lg:w-12 mb-3 text-yellow-800" }),
                        react_1["default"].createElement(react_2.Typography, { variant: "h5", color: "blue-gray", className: "mb-2 text-yellow-800" }, "Address"),
                        react_1["default"].createElement(react_2.Typography, { className: "text-sm font-semibold leading-6 text-black" },
                            "\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E1E\u0E19\u0E21\u0E27\u0E31\u0E19\u0E17\u0E4C",
                            react_1["default"].createElement("br", null),
                            "198 \u0E16.\u0E21\u0E34\u0E15\u0E23\u0E20\u0E32\u0E1E-\u0E08\u0E2D\u0E2B\u0E2D \u0E15.\u0E1A\u0E49\u0E32\u0E19\u0E42\u0E1E\u0E18\u0E34\u0E4C \u0E2D.\u0E40\u0E21\u0E37\u0E2D\u0E07 \u0E08.\u0E19\u0E04\u0E23\u0E23\u0E32\u0E0A\u0E2A\u0E35\u0E21\u0E32 30310")))),
            react_1["default"].createElement("div", { className: "p-4 w-full sm:w-1/2 lg:w-1/3 flex justify-center drop-shadow-lg", "data-aos": "fade-up", "data-aos-delay": "200", "data-aos-duration": "100" },
                react_1["default"].createElement(react_2.Card, { className: "w-full  bg-white" },
                    react_1["default"].createElement(react_2.CardBody, null,
                        react_1["default"].createElement(fa_1.FaPhoneAlt, { className: "h-8 w-8 lg:h-12 lg:w-12 text-yellow-800" }),
                        react_1["default"].createElement(react_2.Typography, { variant: "h5", color: "blue-gray", className: "mb-2 text-yellow-800" }, "Call Us"),
                        react_1["default"].createElement(react_2.Typography, { className: "text-sm font-semibold leading-6 text-black" },
                            "\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C : 044-955121-122",
                            react_1["default"].createElement("br", null),
                            "\u0E42\u0E17\u0E23\u0E2A\u0E32\u0E23 : 044-955120")))))));
};
