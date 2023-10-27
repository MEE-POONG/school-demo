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
var TitleText_1 = require("@/components/TitleText");
var react_1 = require("@material-tailwind/react");
var link_1 = require("next/link");
var react_2 = require("react");
var aos_1 = require("aos");
var react_slick_1 = require("react-slick");
var loading_1 = require("@/components/loading");
var news_1 = require("@/data/news");
exports.NewNews = function () {
    var _a;
    var _b = react_2.useState((_a = news_1.newsMenu[0]) === null || _a === void 0 ? void 0 : _a.value), selectType = _b[0], setSelectType = _b[1];
    var _c = react_2.useState([]), newsArray = _c[0], setNewsArray = _c[1];
    var _d = react_2.useState(true), isLoading = _d[0], setIsLoading = _d[1];
    var _e = react_2.useState(null), error = _e[0], setError = _e[1];
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
    react_2.useEffect(function () {
        aos_1["default"].init({
            duration: 1000
        });
    }, []);
    react_2.useEffect(function () {
        fetch("/api/news/search?page=1&pageSize=10&keyword=" + selectType)
            .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
            .then(function (data) {
            setNewsArray(data === null || data === void 0 ? void 0 : data.newsData);
            setIsLoading(false);
        })["catch"](function (error) {
            console.error('Error:', error);
            setError(error.message);
            setIsLoading(false);
        });
    }, []);
    react_2.useEffect(function () {
        fetch("/api/news/search?page=1&pageSize=10&keyword=" + selectType)
            .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
            .then(function (data) {
            setNewsArray(data === null || data === void 0 ? void 0 : data.data);
            setIsLoading(false);
        })["catch"](function (error) {
            console.error('Error:', error);
            setError(error.message);
            setIsLoading(false);
        });
    }, [selectType]);
    if (isLoading) {
        return react_2["default"].createElement("div", null, "Loading...");
    }
    if (error) {
        return react_2["default"].createElement("div", null,
            "Error: ",
            error);
    }
    return (react_2["default"].createElement("div", { className: "container m-auto" },
        isLoading && react_2["default"].createElement(loading_1["default"], null),
        react_2["default"].createElement(TitleText_1["default"], { titleText: "ข่าว & กิจกรรม", titleTextTo: "“พนมวันท์”" }),
        react_2["default"].createElement(react_1.Tabs, { id: "custom-animation", value: selectType, "data-aos": "fade-right" },
            react_2["default"].createElement(react_1.TabsHeader, { className: "bg-yellow-800 ", indicatorProps: {
                    className: "bg-yellow-800 shadow-none !text-gray-900"
                } }, news_1.newsMenu.map(function (_a) {
                var label = _a.label, value = _a.value;
                return (react_2["default"].createElement(react_1.Tab, { key: value, value: value, className: "font-bold text-white ", onClick: function () { return setSelectType(value); } }, label));
            })),
            react_2["default"].createElement(react_1.TabsBody, { animate: {
                    initial: { y: 250 },
                    mount: { y: 0 },
                    unmount: { y: 250 }
                } },
                react_2["default"].createElement(react_slick_1["default"], __assign({}, settings), newsArray === null || newsArray === void 0 ? void 0 : newsArray.map(function (news) { return (react_2["default"].createElement("div", { key: news === null || news === void 0 ? void 0 : news.id },
                    react_2["default"].createElement(react_1.Card, { className: "my-6 w-72 overflow-hidden mx-auto" },
                        react_2["default"].createElement(react_1.CardHeader, { floated: false, shadow: false, color: "transparent", className: "m-0 rounded-none" },
                            react_2["default"].createElement("img", { className: "h-48 object-cover", src: "https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/" + ((news === null || news === void 0 ? void 0 : news.img) || "4500f404-dbac-40f3-6696-ae768a38e800") + "/700", alt: (news === null || news === void 0 ? void 0 : news.title) || "Image Alt Text" })),
                        react_2["default"].createElement(react_1.CardBody, null,
                            react_2["default"].createElement(react_1.Typography, { variant: "h6", color: "blue-gray", className: "title-clamp" }, news === null || news === void 0 ? void 0 : news.title),
                            react_2["default"].createElement(react_1.Typography, { variant: "lead", color: "gray", className: "mt-3 font-normal text-sm subtitle-clamp" }, news === null || news === void 0 ? void 0 : news.subTitle)),
                        react_2["default"].createElement(react_1.CardFooter, { className: "pt-0" },
                            react_2["default"].createElement(link_1["default"], { href: "/ReadNews?id=" + (news === null || news === void 0 ? void 0 : news.id), className: "flex w-fit mx-auto items-center bg-blue-400 text-white hover:bg-yellow-800 px-6 py-2 rounded-lg" },
                                "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14",
                                react_2["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, className: "h-4 w-4" },
                                    react_2["default"].createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" }))))))); })))),
        react_2["default"].createElement("button", { type: "button", className: "text-yellow-800 hover:text-yellow-900  text-sm leading-6 font-medium py-2 px-3 rounded-lg " },
            react_2["default"].createElement(link_1["default"], { href: "./ShowContentAll" },
                "\u0E14\u0E39\u0E02\u0E48\u0E32\u0E27\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 ",
                ">>>>"))));
};
