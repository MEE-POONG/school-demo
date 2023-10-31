"use strict";
exports.__esModule = true;
var TheLayout_1 = require("@/components/TheLayout");
var TitleText_1 = require("@/components/TitleText");
var NewsAll_1 = require("@/container/News/NewsAll");
function NewsPage() {
    return (React.createElement(TheLayout_1["default"], null,
        React.createElement("div", { className: "container mx-auto py-16" },
            React.createElement(TitleText_1["default"], { titleText: "ข่าวสาร ", titleTextTo: "และกิจกรรม" }),
            React.createElement(NewsAll_1["default"], null))));
}
exports["default"] = NewsPage;
