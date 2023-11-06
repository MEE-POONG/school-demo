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
var TheLayout_1 = require("@/components/TheLayout");
var TitleText_1 = require("@/components/TitleText");
var react_1 = require("react");
function NewsPage() {
    var _a = react_1.useState([]), newsMenu = _a[0], setNewsMenu = _a[1];
    var _b = react_1.useState(''), selectKey = _b[0], setSelectKey = _b[1];
    var _c = react_1.useState([]), newsArray = _c[0], setNewsArray = _c[1];
    var _d = react_1.useState({
        page: 1,
        pageSize: 10,
        keyword: ''
    }), params = _d[0], setParams = _d[1];
    var _e = react_1.useState([]), checkPage = _e[0], setCheckPage = _e[1];
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
            var _a;
            if (((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                setSelectKey(data === null || data === void 0 ? void 0 : data.data[0].id);
            }
            setNewsMenu(data === null || data === void 0 ? void 0 : data.data);
            setIsLoading(false);
        })["catch"](function (error) {
            console.error('Error:', error);
            setError(error.message);
            setIsLoading(false);
        });
    }, []);
    react_1.useEffect(function () {
        fetch("/api/newsType/joinNews?page=" + params.page + "&pageSize=" + params.pageSize + "&keyword=" + params.keyword)
            .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
            .then(function (data) {
            setNewsArray(function (prevNews) { return __spreadArrays(prevNews, data === null || data === void 0 ? void 0 : data.data); });
            setCheckPage(data === null || data === void 0 ? void 0 : data.paginationInfo);
            setIsLoading(false);
        })["catch"](function (error) {
            console.error('Error:', error);
            setError(error.message);
            setIsLoading(false);
        });
    }, []);
    react_1.useEffect(function () {
        console.log(params.page);
        if (params.keyword !== '')
            fetch("/api/news/searchTypeID?page=" + params.page + "&pageSize=" + params.pageSize + "&keyword=" + params.keyword)
                .then(function (response) {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
                .then(function (data) {
                console.log("88 : ", data);
                setNewsArray(function (prevNews) { return __spreadArrays(prevNews, data === null || data === void 0 ? void 0 : data.data); });
                setCheckPage(function (prevCheckPage) {
                    var newPaginationInfo = data === null || data === void 0 ? void 0 : data.paginationInfo[0];
                    var indexToUpdate = prevCheckPage.findIndex(function (item) { return item.type === newPaginationInfo.type; });
                    if (indexToUpdate !== -1) {
                        var updatedCheckPage = __spreadArrays(prevCheckPage.slice(0, indexToUpdate), [
                            newPaginationInfo
                        ], prevCheckPage.slice(indexToUpdate + 1));
                        return updatedCheckPage;
                    }
                    return prevCheckPage;
                });
                setIsLoading(false);
            })["catch"](function (error) {
                console.error('Error:', error);
                setError(error.message);
                setIsLoading(false);
            });
    }, [params.page]);
    react_1.useEffect(function () {
        console.log(checkPage);
    }, [checkPage]);
    var handleChangeSelectKey = function (select) {
        setSelectKey(select);
    };
    var handleChangekeyword = function (search, page) {
        setParams(function (prevParams) { return (__assign(__assign({}, prevParams), { keyword: search, page: page })); });
    };
    return (React.createElement(TheLayout_1["default"], null,
        React.createElement("div", { className: "container mx-auto py-16" },
            React.createElement(TitleText_1["default"], { titleText: "ข่าว & กิจกรรม", titleTextTo: "“พนมวันท์”" }))));
}
exports["default"] = NewsPage;
