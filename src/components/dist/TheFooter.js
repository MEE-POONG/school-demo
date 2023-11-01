"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var TheFooter = function () {
    return (react_1["default"].createElement("footer", { className: "bg-blue-500 w-full" },
        react_1["default"].createElement("div", { className: "container mx-auto p-7 lg:flex lg:justify-between items-center " },
            react_1["default"].createElement("div", { className: "md:flex" },
                react_1["default"].createElement(link_1["default"], { href: "./" },
                    react_1["default"].createElement("img", { src: "/img/Logo_panomwan.png", className: "h-[60px] md:h-[100px] mr-3", alt: "Flowbite Logo" })),
                react_1["default"].createElement("span", { className: "self-center text-xs md:text-base font-medium text-white" },
                    react_1["default"].createElement("p", null, "PHANOMWAN COLLEGE OF TECHNOLOGY"),
                    react_1["default"].createElement("hr", { className: "md:w-full h-[1px] lg:w-[400px] xl:w-full bg-white my-1" }),
                    react_1["default"].createElement("p", null, "198 \u0E16.\u0E21\u0E34\u0E15\u0E23\u0E20\u0E32\u0E1E-\u0E08\u0E2D\u0E2B\u0E2D \u0E15.\u0E1A\u0E49\u0E32\u0E19\u0E42\u0E1E\u0E18\u0E34\u0E4C \u0E2D.\u0E40\u0E21\u0E37\u0E2D\u0E07 \u0E08.\u0E19\u0E04\u0E23\u0E23\u0E32\u0E0A\u0E2A\u0E35\u0E21\u0E32 30310"),
                    react_1["default"].createElement("p", null, "TEL : 044-955121-122 \u00A0FAX : 044-955120"))),
            react_1["default"].createElement("div", { className: "mt-5 md:flex justify-around gap-16" },
                react_1["default"].createElement("div", { className: "" },
                    react_1["default"].createElement("h4", { className: "md:mb-3 text-sm md:text-base md:font-semibold text-white" }, "\u0E04\u0E13\u0E30\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E34\u0E14\u0E2A\u0E2D\u0E19"),
                    react_1["default"].createElement("div", { className: "bg-white w-full h-[0.25px] md:hidden mb-1" }),
                    react_1["default"].createElement("ul", { className: "text-white text-xs md:text-sm" },
                        react_1["default"].createElement("li", { className: "mb-1" }, "\u0E04\u0E13\u0E30\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E18\u0E23\u0E38\u0E01\u0E34\u0E08"),
                        react_1["default"].createElement("li", { className: "mb-1" }, "\u0E04\u0E13\u0E30\u0E27\u0E34\u0E17\u0E22\u0E32\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E41\u0E25\u0E30\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35"),
                        react_1["default"].createElement("li", { className: "mb-1" }, "\u0E04\u0E13\u0E30\u0E27\u0E34\u0E17\u0E22\u0E32\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C"),
                        react_1["default"].createElement("li", null, "\u0E04\u0E13\u0E30\u0E28\u0E34\u0E25\u0E1B\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C"))),
                react_1["default"].createElement("div", { className: "mt-5 md:mt-0" },
                    react_1["default"].createElement("h4", { className: " md:mb-3 text-sm md:text-base md:font-semibold text-white" }, "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"),
                    react_1["default"].createElement("div", { className: "bg-white w-full h-[0.25px] md:hidden mb-1" }),
                    react_1["default"].createElement("ul", { className: "text-white text-xs md:text-sm" },
                        react_1["default"].createElement("li", { className: "mb-1" },
                            react_1["default"].createElement(link_1["default"], { href: "/register", className: "hover:underline " }, "\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19")),
                        react_1["default"].createElement("li", { className: "mb-4" },
                            react_1["default"].createElement(link_1["default"], { href: "/advisor", className: "hover:underline " }, "\u0E1B\u0E23\u0E36\u0E01\u0E29\u0E32\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19")))))),
        react_1["default"].createElement("div", { className: " bg-black w-full p-2" },
            react_1["default"].createElement("div", { className: " text-white text-center text-[12px] md:text-xs" },
                "\u00A9 2023\u00A0",
                react_1["default"].createElement(link_1["default"], { href: "", className: "hover:underline hover:text-amber-400" }, "Me Prompt Technology COMPANY LIMITED."),
                "\u00A0All Rights Reserved."))));
};
exports["default"] = TheFooter;
