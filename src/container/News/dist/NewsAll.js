"use strict";
exports.__esModule = true;
var react_1 = require("@material-tailwind/react");
var news_1 = require("@/data/news");
var react_2 = require("react");
var NewsAll = function () {
    var _a;
    var _b = react_2.useState((_a = news_1.newsMenu[0]) === null || _a === void 0 ? void 0 : _a.value), selectType = _b[0], setSelectType = _b[1];
    var _c = react_2.useState([]), newsArray = _c[0], setNewsArray = _c[1];
    var _d = react_2.useState(true), isLoading = _d[0], setIsLoading = _d[1];
    var _e = react_2.useState(null), error = _e[0], setError = _e[1];
    react_2.useEffect(function () {
        fetch('/api/news/type')
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
    }, []);
    react_2.useEffect(function () {
        fetch('/api/news')
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
    }, []);
    react_2.useEffect(function () {
        console.log("newsArray : ", newsArray);
    }, [newsArray]);
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
                } },
                news_1.newsMenu.map(function (_a) {
                    var label = _a.label, value = _a.value;
                    return (react_2["default"].createElement(react_1.Tab, { key: value, value: value, className: "font-bold text-white w-1/2 md:w-full", onClick: function () { return setSelectType(value); } }, label));
                }),
                news_1.newsRelations.map(function (_a) {
                    var label = _a.label, value = _a.value;
                    return (react_2["default"].createElement(react_1.Tab, { key: value, value: value, className: "font-bold text-white w-1/2 md:w-full", onClick: function () { return setSelectType(value); } }, label));
                })),
            react_2["default"].createElement(react_1.TabsBody, { className: "pb-4 pt-4 bg-white my-8 shadow-lg rounded-xl", animate: {
                    initial: { y: 250 },
                    mount: { y: 0 },
                    unmount: { y: 250 }
                } },
                react_2["default"].createElement("div", { className: "text-center" },
                    react_2["default"].createElement("button", { type: "button", className: "text-yellow-800 hover:text-yellow-900  text-sm leading-6 font-medium py-2 px-3 rounded-lg " },
                        "\u0E14\u0E39\u0E02\u0E48\u0E32\u0E27\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 ",
                        ">>>>"))))));
};
exports["default"] = NewsAll;
