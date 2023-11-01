"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TheLayout_1 = require("@/components/TheLayout");
var ContactUS_1 = require("@/container/ContactUS");
var headder_1 = require("@/container/Home/headder");
var menu_1 = require("@/container/Home/menu");
var statistics_1 = require("@/container/Home/statistics");
var HomeSlide_1 = require("@/container/Home/HomeSlide");
function Index() {
    return (react_1["default"].createElement(TheLayout_1["default"], null,
        react_1["default"].createElement(headder_1["default"], null),
        react_1["default"].createElement(menu_1.Menu, null),
        react_1["default"].createElement(HomeSlide_1["default"], null),
        react_1["default"].createElement(statistics_1["default"], null),
        react_1["default"].createElement(ContactUS_1.ContactUS, null)));
}
exports["default"] = Index;
