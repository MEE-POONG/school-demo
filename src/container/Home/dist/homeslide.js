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
var react_1 = require("react");
var react_slick_1 = require("react-slick");
var link_1 = require("next/link");
var HomeSlider = function () {
    var _a = react_1.useState([]), newsArray = _a[0], setNewsArray = _a[1];
    var _b = react_1.useState(true), isLoading = _b[0], setIsLoading = _b[1];
    var _c = react_1.useState(null), error = _c[0], setError = _c[1];
    react_1.useEffect(function () {
        fetch("/api/news")
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
    if (isLoading) {
        return react_1["default"].createElement("div", null, "Loading...");
    }
    if (error) {
        return react_1["default"].createElement("div", null,
            "Error: ",
            error);
    }
    var settings = {
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };
    return (react_1["default"].createElement("div", { className: "container mx-auto" },
        react_1["default"].createElement(react_slick_1["default"], __assign({}, settings, { className: "no-slick-arrow" }), newsArray
            .filter(function (news) { return news.promoteImg; }) // กรองข่าวที่มีภาพ promteImg ไม่ว่าง
            .map(function (news) { return (react_1["default"].createElement("div", { key: news.id },
            react_1["default"].createElement(link_1["default"], { key: news.id, href: "/news/" + news.id },
                react_1["default"].createElement("img", { className: "w-full h-full", src: "https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/" + news.promoteImg + "/700", alt: "" })))); }))));
};
exports["default"] = HomeSlider;
