"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.NewNews = void 0;
var react_1 = require("react");
var react_2 = require("@material-tailwind/react");
var link_1 = require("next/link");
var aos_1 = require("aos");
var TitleText_1 = require("@/components/TitleText");
var react_slick_1 = require("react-slick");
// const repeatDataUntilMinLength = (data: any, minLength: number) => {
//   let result = [...data];
//   while (result.length < minLength) {
//     result = result.concat(data);
//   }
//   return result;
// };
exports.NewNews = function () {
    var _a;
    var _b = react_1.useState([]), newsMenu = _b[0], setNewsMenu = _b[1];
    var _c = react_1.useState({
        page: 1,
        pageSize: 10,
        keyword: '',
        newsTypeId: ''
    }), params = _c[0], setParams = _c[1];
    var _d = react_1.useState(0), checkTotal = _d[0], setCheckTotal = _d[1];
    var _e = react_1.useState([]), newsArray = _e[0], setNewsArray = _e[1];
    var _f = react_1.useState(true), isLoading = _f[0], setIsLoading = _f[1];
    var _g = react_1.useState(null), error = _g[0], setError = _g[1];
    react_1.useEffect(function () {
        aos_1["default"].init({
            duration: 1000
        });
    }, []);
    react_1.useEffect(function () {
        fetch('/api/newsType')
            .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
            .then(function (data) {
            var _a;
            setNewsMenu(data === null || data === void 0 ? void 0 : data.newsType);
            setParams(function (prevParams) {
                var _a;
                return (__assign(__assign({}, prevParams), { newsTypeId: (_a = data === null || data === void 0 ? void 0 : data.newsType[0]) === null || _a === void 0 ? void 0 : _a.id }));
            });
            setCheckTotal((_a = data === null || data === void 0 ? void 0 : data.pagination) === null || _a === void 0 ? void 0 : _a.total);
            setIsLoading(false);
        })["catch"](function (error) {
            console.error('Error:', error);
            setError(error.message);
            setIsLoading(false);
        });
    }, []);
    react_1.useEffect(function () {
        fetch("/api/newsType/search?page=" + params.page + "&pageSize=" + params.pageSize + "&keyword=" + params.keyword + "&newsTypeId=" + params.newsTypeId)
            .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
            .then(function (data) {
            console.log("data : ", data);
            setNewsArray(data === null || data === void 0 ? void 0 : data.newsData);
            setIsLoading(false);
        })["catch"](function (error) {
            console.error('Error:', error);
            setError(error.message);
            setIsLoading(false);
        });
    }, [params]);
    react_1.useEffect(function () {
        console.log("newsArray : ", newsArray);
    }, [newsArray]);
    var handleSeeMore = function () {
        setParams(function (prevParams) { return (__assign(__assign({}, prevParams), { pageSize: prevParams.pageSize + 10 })); });
    };
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    // const newsToDisplay = repeatDataUntilMinLength(newsArray, 4);
    if (isLoading) {
        return react_1["default"].createElement("div", null, "Loading...");
    }
    if (error) {
        return react_1["default"].createElement("div", null,
            "Error: ",
            error);
    }
    return (react_1["default"].createElement("div", { className: "container m-auto" },
        react_1["default"].createElement(TitleText_1["default"], { titleText: "ข่าวสาร ", titleTextTo: "“พนมวันท์”" }),
        react_1["default"].createElement(react_2.Tabs, { id: "custom-animation", value: params.newsTypeId },
            react_1["default"].createElement(react_2.TabsHeader, { className: "bg-yellow-800 ", indicatorProps: {
                    className: "bg-yellow-800 shadow-none "
                } }, (_a = newsMenu === null || newsMenu === void 0 ? void 0 : newsMenu.filter(function (type) { return (type === null || type === void 0 ? void 0 : type.nameEN) === "News" || (type === null || type === void 0 ? void 0 : type.nameEN) === "Relations"; })) === null || _a === void 0 ? void 0 : _a.map(function (type) { return (react_1["default"].createElement(react_2.Tab, { key: type === null || type === void 0 ? void 0 : type.id, value: type === null || type === void 0 ? void 0 : type.id, className: "font-bold text-white w-1/2 md:w-full", onClick: function () { return setParams(function (prevParams) { return (__assign(__assign({}, prevParams), { newsTypeId: type === null || type === void 0 ? void 0 : type.id })); }); } }, type === null || type === void 0 ? void 0 : type.nameTH)); })),
            react_1["default"].createElement(react_2.TabsBody, { animate: {
                    initial: { y: 250 },
                    mount: { y: 0 },
                    unmount: { y: 250 }
                } },
                react_1["default"].createElement(react_slick_1["default"], __assign({}, settings, { swipeToSlide: true, focusOnSelect: true }),
                    newsArray.map(function (list) { return (react_1["default"].createElement("div", { key: list === null || list === void 0 ? void 0 : list.id },
                        react_1["default"].createElement(react_2.Card, { className: "my-6 w-72 overflow-hidden mx-auto" },
                            react_1["default"].createElement(react_2.CardHeader, { floated: false, shadow: false, color: "transparent", className: "m-0 rounded-none" },
                                react_1["default"].createElement("img", { className: "h-48 object-cover", src: "https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/" + ((list === null || list === void 0 ? void 0 : list.img) || "4500f404-dbac-40f3-6696-ae768a38e800") + "/150", alt: (list === null || list === void 0 ? void 0 : list.title) || "Image Alt Text" })),
                            react_1["default"].createElement(react_2.CardBody, null,
                                react_1["default"].createElement(react_2.Typography, { variant: "h6", color: "blue-gray", className: "title-clamp text-xs md:text-base" }, list === null || list === void 0 ? void 0 : list.title),
                                react_1["default"].createElement(react_2.Typography, { variant: "lead", color: "gray", className: "mt-3 font-normal text-xs md:text-base subtitle-clamp" }, list === null || list === void 0 ? void 0 : list.subTitle)),
                            react_1["default"].createElement(react_2.CardFooter, { className: "pt-0" },
                                react_1["default"].createElement(link_1["default"], { href: "/news/" + (list === null || list === void 0 ? void 0 : list.id), className: "flex w-fit mx-auto items-center bg-blue-400 text-white hover:bg-yellow-800 px-6 py-2 rounded-lg text-xs md:text-base" },
                                    "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14",
                                    react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, className: "h-4 w-4" },
                                        react_1["default"].createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" }))))))); }),
                    (newsArray === null || newsArray === void 0 ? void 0 : newsArray.length) < 4 ?
                        newsArray.map(function (list) { return (react_1["default"].createElement("div", { key: list === null || list === void 0 ? void 0 : list.id },
                            react_1["default"].createElement(react_2.Card, { className: "my-6 w-72 overflow-hidden mx-auto" },
                                react_1["default"].createElement(react_2.CardHeader, { floated: false, shadow: false, color: "transparent", className: "m-0 rounded-none" },
                                    react_1["default"].createElement("img", { className: "h-48 object-cover", src: "https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/" + ((list === null || list === void 0 ? void 0 : list.img) || "4500f404-dbac-40f3-6696-ae768a38e800") + "/150", alt: (list === null || list === void 0 ? void 0 : list.title) || "Image Alt Text" })),
                                react_1["default"].createElement(react_2.CardBody, null,
                                    react_1["default"].createElement(react_2.Typography, { variant: "h6", color: "blue-gray", className: "title-clamp text-xs md:text-base" }, list === null || list === void 0 ? void 0 : list.title),
                                    react_1["default"].createElement(react_2.Typography, { variant: "lead", color: "gray", className: "mt-3 font-normal text-xs md:text-base subtitle-clamp" }, list === null || list === void 0 ? void 0 : list.subTitle)),
                                react_1["default"].createElement(react_2.CardFooter, { className: "pt-0" },
                                    react_1["default"].createElement(link_1["default"], { href: "/news/" + (list === null || list === void 0 ? void 0 : list.id), className: "flex w-fit mx-auto items-center bg-blue-400 text-white hover:bg-yellow-800 px-6 py-2 rounded-lg text-xs md:text-base" },
                                        "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14",
                                        react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, className: "h-4 w-4" },
                                            react_1["default"].createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" }))))))); }) :
                        "")))));
};
