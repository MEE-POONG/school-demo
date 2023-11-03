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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.NewsAll = void 0;
var react_1 = require("react");
var react_2 = require("@material-tailwind/react");
var link_1 = require("next/link");
var TitleText_1 = require("@/components/TitleText");
exports.NewsAll = function () {
    var _a = react_1.useState([]), newsMenu = _a[0], setNewsMenu = _a[1];
    var _b = react_1.useState('News'), selectKey = _b[0], setSelectKey = _b[1];
    var _c = react_1.useState([]), newsArray = _c[0], setNewsArray = _c[1];
    var _d = react_1.useState({
        page: 1,
        pageSize: 10,
        keyword: ''
    }), params = _d[0], setParams = _d[1];
    var _e = react_1.useState(0), checkTotal = _e[0], setCheckTotal = _e[1];
    var _f = react_1.useState(true), isLoading = _f[0], setIsLoading = _f[1];
    var _g = react_1.useState(null), error = _g[0], setError = _g[1];
    react_1.useEffect(function () {
        fetch("/api/newsType")
            .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
            .then(function (data) {
            setNewsMenu(data === null || data === void 0 ? void 0 : data.data);
            setIsLoading(false);
        })["catch"](function (error) {
            console.error('Error:', error);
            setError(error.message);
            setIsLoading(false);
        });
    }, []);
    react_1.useEffect(function () {
        setIsLoading(true);
        fetch("/api/news/showPage?page=" + params.page + "&pageSize=" + params.pageSize + "&keyword=" + params.keyword)
            .then(function (response) { return response.json(); })
            .then(function (data) {
            setNewsArray(function (prevNews) { return __spreadArrays(prevNews, data.data); });
            setCheckTotal(data === null || data === void 0 ? void 0 : data.pagination.total);
            setIsLoading(false);
        })["catch"](function (error) {
            setError(error.message);
            setIsLoading(false);
        });
    }, [params]);
    react_1.useEffect(function () {
        console.log("76 : ", newsArray);
    }, [newsArray]);
    var handleSeeMore = function () {
        setParams(function (prevParams) { return (__assign(__assign({}, prevParams), { page: prevParams.page + 1 })); });
    };
    // if (isLoading) {
    //   return <div>Loading...</div>;
    // }
    // if (error) {
    //   return <div>Error: {error}</div>;
    // }
    return (react_1["default"].createElement("div", { className: "container m-auto" },
        react_1["default"].createElement(TitleText_1["default"], { titleText: "ข่าว & กิจกรรม", titleTextTo: "“พนมวันท์”" }),
        react_1["default"].createElement(react_2.Tabs, { id: "custom-animation", value: selectKey },
            react_1["default"].createElement(react_2.TabsHeader, { className: "bg-blue-700 text-white flex-wrap md:flex-nowrap justify-center", indicatorProps: {
                    className: "bg-blue-500 shadow-none !text-gray-900"
                } }, newsMenu === null || newsMenu === void 0 ? void 0 : newsMenu.map(function (type) { return (react_1["default"].createElement(react_2.Tab, { key: type === null || type === void 0 ? void 0 : type.nameEN, value: type === null || type === void 0 ? void 0 : type.nameEN, className: "font-bold text-white w-1/2 md:w-full", onClick: function () { return setSelectKey(type === null || type === void 0 ? void 0 : type.nameEN); } }, type === null || type === void 0 ? void 0 : type.nameTH)); })),
            react_1["default"].createElement(react_2.TabsBody, { animate: { initial: { y: 250 }, mount: { y: 0 }, unmount: { y: 250 } } }, newsMenu === null || newsMenu === void 0 ? void 0 : newsMenu.map(function (listType) {
                var _a;
                return (react_1["default"].createElement(react_2.TabPanel, { key: listType === null || listType === void 0 ? void 0 : listType.nameEN, value: listType === null || listType === void 0 ? void 0 : listType.nameEN, className: "pt-4  pb-4  bg-white my-8 shadow-lg rounded-xl" },
                    react_1["default"].createElement("ul", { className: "bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6" }, (_a = newsArray === null || newsArray === void 0 ? void 0 : newsArray.filter(function (list) { return (listType === null || listType === void 0 ? void 0 : listType.id) === (list === null || list === void 0 ? void 0 : list.newsTypeId); })) === null || _a === void 0 ? void 0 : _a.map(function (list) { return (react_1["default"].createElement("li", { key: list === null || list === void 0 ? void 0 : list.id, className: "flex" },
                        react_1["default"].createElement(link_1["default"], { href: "/news/" + (list === null || list === void 0 ? void 0 : list.id), className: "hover:border-blue-500 hover:border-solid hover:text-blue-700 hover:bg-blue-100 group w-full flex flex-col px-4 justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3" },
                            react_1["default"].createElement("div", { className: "flex items-center" },
                                react_1["default"].createElement("img", { className: "object-cover mr-4 w-36 h-16", src: "https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/" + ((list === null || list === void 0 ? void 0 : list.img) || "4500f404-dbac-40f3-6696-ae768a38e800") + "/150", alt: (list === null || list === void 0 ? void 0 : list.title) || "Image Alt Text" }),
                                react_1["default"].createElement("div", { className: "min-w-0 flex-auto" },
                                    react_1["default"].createElement("p", { className: "text-sm font-semibold leading-6" }, list === null || list === void 0 ? void 0 : list.title),
                                    react_1["default"].createElement("p", { className: "mt-1 truncate text-xs leading-5 text-gray-500" }, list === null || list === void 0 ? void 0 : list.subTitle)))))); })),
                    react_1["default"].createElement("div", { className: "text-center" },
                        react_1["default"].createElement("button", { type: "button", className: "text-yellow-800 hover:text-yellow-900 text-sm leading-6 font-medium py-2 px-3 rounded-lg " + (checkTotal === (params === null || params === void 0 ? void 0 : params.page) ? 'hidden' : ''), onClick: handleSeeMore },
                            "\u0E14\u0E39\u0E40\u0E1E\u0E34\u0E48\u0E21 ",
                            ">>>>"))));
            })))));
};
