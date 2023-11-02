use strict";
exports.__esModule = true;
exports.Relations = void 0;
var react_1 = require("react");
var react_2 = require("@material-tailwind/react");
var link_1 = require("next/link");
var news_1 = require("@/data/news");
var TitleText_1 = require("@/components/TitleText");
exports.Relations = function () {
    var _a = react_1.useState('Activity'), selectKey = _a[0], setSelectKey = _a[1];
    var _b = react_1.useState([]), newsArray = _b[0], setNewsArray = _b[1];
    var _c = react_1.useState(true), isLoading = _c[0], setIsLoading = _c[1];
    var _d = react_1.useState(null), error = _d[0], setError = _d[1];
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
            react_1["default"].createElement(react_2.TabsHeader, { className: "bg-blue-700 text-white flex-wrap md:flex-nowrap justify-center", indicatorProps: {
                    className: "bg-blue-500 shadow-none !text-gray-900"
                } }, news_1.newsRelations === null || news_1.newsRelations === void 0 ? void 0 : news_1.newsRelations.map(function (type) { return (react_1["default"].createElement(react_2.Tab, { key: type === null || type === void 0 ? void 0 : type.nameEN, value: type === null || type === void 0 ? void 0 : type.nameEN, className: "font-bold text-white w-1/2 md:w-full", onClick: function () { return setSelectKey(type === null || type === void 0 ? void 0 : type.nameTH); } }, type === null || type === void 0 ? void 0 : type.nameTH)); })),
            react_1["default"].createElement(react_2.TabsBody, { animate: { initial: { y: 250 }, mount: { y: 0 }, unmount: { y: 250 } } }, newsArray === null || newsArray === void 0 ? void 0 : newsArray.map(function (listType) {
                var _a;
                return (react_1["default"].createElement(react_2.TabPanel, { key: listType === null || listType === void 0 ? void 0 : listType.nameEN, value: listType === null || listType === void 0 ? void 0 : listType.nameEN, className: "pt-4  pb-4  bg-white my-8 shadow-lg rounded-xl" },
                    react_1["default"].createElement("ul", { className: "bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6" }, (_a = listType === null || listType === void 0 ? void 0 : listType.News) === null || _a === void 0 ? void 0 : _a.map(function (newsItem) { return (react_1["default"].createElement("li", { key: newsItem === null || newsItem === void 0 ? void 0 : newsItem.id, className: "flex" },
                        react_1["default"].createElement(link_1["default"], { href: "/news/" + (newsItem === null || newsItem === void 0 ? void 0 : newsItem.id), className: "hover:border-blue-500 hover:border-solid hover:text-blue-700 hover:bg-blue-100 group w-full flex flex-col px-4 justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3" },
                            react_1["default"].createElement("div", { className: "flex items-center" },
                                react_1["default"].createElement("img", { className: "object-cover mr-4 w-36 h-16", src: "https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/" + ((newsItem === null || newsItem === void 0 ? void 0 : newsItem.img) || "4500f404-dbac-40f3-6696-ae768a38e800") + "/150", alt: (newsItem === null || newsItem === void 0 ? void 0 : newsItem.title) || "Image Alt Text" }),
                                react_1["default"].createElement("div", { className: "min-w-0 flex-auto" },
                                    react_1["default"].createElement("p", { className: "text-sm font-semibold leading-6" }, newsItem === null || newsItem === void 0 ? void 0 : newsItem.title),
                                    react_1["default"].createElement("p", { className: "mt-1 truncate text-xs leading-5 text-gray-500" }, newsItem === null || newsItem === void 0 ? void 0 : newsItem.subTitle)))))); })),
                    react_1["default"].createElement("div", { className: "text-center" },
                        react_1["default"].createElement(link_1["default"], { href: "/news", className: "text-yellow-800 hover:text-yellow-900 text-sm leading-6 font-medium py-2 px-3 rounded-lg" },
                            "See more ",
                            ">>>>"))));
            })))));
};
