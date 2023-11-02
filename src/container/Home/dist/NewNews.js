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
var news_1 = require("@/data/news");
var aos_1 = require("aos");
var TitleText_1 = require("@/components/TitleText");
var react_slick_1 = require("react-slick");
exports.NewNews = function () {
    var _a = react_1.useState('News'), selectKey = _a[0], setSelectKey = _a[1];
    var _b = react_1.useState([]), newsArray = _b[0], setNewsArray = _b[1];
    var _c = react_1.useState(true), isLoading = _c[0], setIsLoading = _c[1];
    var _d = react_1.useState(null), error = _d[0], setError = _d[1];
    react_1.useEffect(function () {
        aos_1["default"].init({
            duration: 1000
        });
    }, []);
    react_1.useEffect(function () {
        fetch("/api/newsType")
            .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
            .then(function (data) {
            console.log("36 : ", data === null || data === void 0 ? void 0 : data.data);
            setNewsArray(data === null || data === void 0 ? void 0 : data.data);
            setIsLoading(false);
        })["catch"](function (error) {
            console.error('Error:', error);
            setError(error.message);
            setIsLoading(false);
        });
    }, []);
    // useEffect(() => {
    //   console.log(newsArray);
    // }, [newsArray]);
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
    if (isLoading) {
        return react_1["default"].createElement("div", null, "Loading...");
    }
    if (error) {
        return react_1["default"].createElement("div", null,
            "Error: ",
            error);
    }
    return (react_1["default"].createElement("div", { className: "container m-auto" },
        react_1["default"].createElement(TitleText_1["default"], { titleText: "ข่าว & กิจกรรม", titleTextTo: "“พนมวันท์”" }),
        react_1["default"].createElement(react_2.Tabs, { id: "custom-animation", value: selectKey },
            react_1["default"].createElement(react_2.TabsHeader, { className: "bg-yellow-800 ", indicatorProps: {
                    className: "bg-yellow-800 shadow-none "
                } }, news_1.newsMenu === null || news_1.newsMenu === void 0 ? void 0 : news_1.newsMenu.map(function (type) { return (react_1["default"].createElement(react_2.Tab, { key: type === null || type === void 0 ? void 0 : type.nameEN, value: type === null || type === void 0 ? void 0 : type.nameEN, className: "font-bold text-white w-1/2 md:w-full", onClick: function () { return setSelectKey(type === null || type === void 0 ? void 0 : type.nameTH); } }, type === null || type === void 0 ? void 0 : type.nameTH)); })),
            react_1["default"].createElement(react_2.TabsBody, { animate: { initial: { y: 250 }, mount: { y: 0 }, unmount: { y: 250 } } }, newsArray === null || newsArray === void 0 ? void 0 : newsArray.map(function (listType) {
                var _a;
                return (react_1["default"].createElement(react_2.TabPanel, { key: listType === null || listType === void 0 ? void 0 : listType.nameEN, value: listType === null || listType === void 0 ? void 0 : listType.nameEN, className: "pt-4  pb-4  bg-white my-8 shadow-lg rounded-xl" },
                    react_1["default"].createElement(react_slick_1["default"], __assign({}, settings, { swipeToSlide: true, focusOnSelect: true }), (_a = listType === null || listType === void 0 ? void 0 : listType.News) === null || _a === void 0 ? void 0 : _a.map(function (newsItem) { return (react_1["default"].createElement("div", { key: newsItem === null || newsItem === void 0 ? void 0 : newsItem.id },
                        react_1["default"].createElement(react_2.Card, { className: "my-6 w-72 overflow-hidden mx-auto" },
                            react_1["default"].createElement(react_2.CardHeader, { floated: false, shadow: false, color: "transparent", className: "m-0 rounded-none" },
                                react_1["default"].createElement("img", { className: "h-48 object-cover", src: "https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/" + ((newsItem === null || newsItem === void 0 ? void 0 : newsItem.img) || "4500f404-dbac-40f3-6696-ae768a38e800") + "/350", alt: (newsItem === null || newsItem === void 0 ? void 0 : newsItem.title) || "Image Alt Text" })),
                            react_1["default"].createElement(react_2.CardBody, null,
                                react_1["default"].createElement(react_2.Typography, { variant: "h6", color: "blue-gray", className: "title-clamp text-xs md:text-base" }, newsItem === null || newsItem === void 0 ? void 0 : newsItem.title),
                                react_1["default"].createElement(react_2.Typography, { variant: "lead", color: "gray", className: "mt-3 font-normal text-xs md:text-base subtitle-clamp" }, newsItem === null || newsItem === void 0 ? void 0 : newsItem.subTitle)),
                            react_1["default"].createElement(react_2.CardFooter, { className: "pt-0" },
                                react_1["default"].createElement(link_1["default"], { href: "/news/" + (newsItem === null || newsItem === void 0 ? void 0 : newsItem.id), className: "flex w-fit mx-auto items-center bg-blue-400 text-white hover:bg-yellow-800 px-6 py-2 rounded-lg text-xs md:text-base" },
                                    "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14",
                                    react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, className: "h-4 w-4" },
                                        react_1["default"].createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" }))))))); })),
                    react_1["default"].createElement("div", { className: "text-center" },
                        react_1["default"].createElement(link_1["default"], { href: "/news", className: "text-yellow-800 hover:text-yellow-900 text-sm leading-6 font-medium py-2 px-3 rounded-lg" },
                            "See more ",
                            ">>>>"))));
            })))));
};
