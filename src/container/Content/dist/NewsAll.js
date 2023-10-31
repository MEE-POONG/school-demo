"use strict";
exports.__esModule = true;
var react_1 = require("@material-tailwind/react");
var link_1 = require("next/link");
var news_1 = require("@/data/news");
var react_2 = require("react");
var NewsAll = function () {
    var _a = react_2.useState("Relations"), selectType = _a[0], setSelectType = _a[1];
    var _b = react_2.useState([]), newsArray = _b[0], setNewsArray = _b[1];
    var _c = react_2.useState(true), isLoading = _c[0], setIsLoading = _c[1];
    var _d = react_2.useState(null), error = _d[0], setError = _d[1];
    react_2.useEffect(function () {
        fetch('/api/news')
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
        return react_2["default"].createElement("div", null, "Loading...");
    }
    if (error) {
        return react_2["default"].createElement("div", null,
            "Error: ",
            error);
    }
    return (react_2["default"].createElement("div", { className: "container" },
        react_2["default"].createElement(react_1.Tabs, { id: "custom-animation", value: selectType },
            react_2["default"].createElement(react_1.TabsHeader, { className: "bg-blue-700 text-white flex-wrap md:flex-nowrap justify-center", indicatorProps: {
                    className: "bg-blue-500 shadow-none !text-gray-900"
                } }, news_1.newsRelations.map(function (_a) {
                var label = _a.label, value = _a.value;
                return (react_2["default"].createElement(react_1.Tab, { key: value, value: value, className: "font-bold text-white w-1/2 md:w-full", onClick: function () { return setSelectType(value); } }, label));
            })),
            react_2["default"].createElement(react_1.TabsBody, { className: "pb-4 pt-4 bg-white my-8 shadow-lg rounded-xl", animate: {
                    initial: { y: 250 },
                    mount: { y: 0 },
                    unmount: { y: 250 }
                } },
                react_2["default"].createElement("ul", { "data-aos": "fade-up", className: "bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6" }, (function () {
                    var filteredNews = newsArray.filter(function (news) { return news.type === selectType; }).slice(0, 10);
                    var displayNews = (filteredNews === null || filteredNews === void 0 ? void 0 : filteredNews.length) < 4 ? filteredNews.concat(filteredNews) : filteredNews;
                    return displayNews === null || displayNews === void 0 ? void 0 : displayNews.slice(selectType ? 0 : -10).map(function (news) { return (react_2["default"].createElement("li", { key: news === null || news === void 0 ? void 0 : news.id, className: "flex" },
                        react_2["default"].createElement(link_1["default"], { href: "", className: "hover:border-blue-500 hover:border-solid hover:text-blue-700  hover:bg-blue-100 group w-full flex flex-col px-4 justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3" },
                            react_2["default"].createElement("div", { className: "flex items-center" },
                                react_2["default"].createElement("img", { className: "w object-cover mr-4 w-36 h-16", src: "https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/" + ((news === null || news === void 0 ? void 0 : news.img) || "4500f404-dbac-40f3-6696-ae768a38e800") + "/150", alt: (news === null || news === void 0 ? void 0 : news.title) || "Image Alt Text" }),
                                react_2["default"].createElement("div", { className: "min-w-0 flex-auto" },
                                    react_2["default"].createElement("p", { className: "text-sm font-semibold leading-6" }, news === null || news === void 0 ? void 0 : news.title),
                                    react_2["default"].createElement("p", { className: "mt-1 truncate text-xs leading-5 text-gray-500" }, news === null || news === void 0 ? void 0 : news.subTitle)))))); });
                })()),
                react_2["default"].createElement("div", { className: "text-center" },
                    react_2["default"].createElement("button", { type: "button", className: "text-yellow-800 hover:text-yellow-900  text-sm leading-6 font-medium py-2 px-3 rounded-lg " },
                        "\u0E14\u0E39\u0E02\u0E48\u0E32\u0E27\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 ",
                        ">>>>"))))));
};
exports["default"] = NewsAll;
