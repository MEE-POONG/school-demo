"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function handler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var method, _a, query, page, pageSize, newsData, totalUserAGsCount, totalPages, newNews, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    method = req.method;
                    _a = method;
                    switch (_a) {
                        case 'GET': return [3 /*break*/, 1];
                        case 'POST': return [3 /*break*/, 4];
                    }
                    return [3 /*break*/, 8];
                case 1:
                    query = req.query;
                    page = parseInt(query.page || '1', 10);
                    pageSize = parseInt(query.pageSize || '10', 10);
                    return [4 /*yield*/, prisma.news.findMany({
                            skip: (page - 1) * pageSize,
                            take: pageSize
                        })];
                case 2:
                    newsData = _b.sent();
                    return [4 /*yield*/, prisma.news.count()];
                case 3:
                    totalUserAGsCount = _b.sent();
                    totalPages = Math.ceil(totalUserAGsCount / pageSize);
                    res.status(200).json({ success: true, data: newsData, pagination: { total: totalPages, page: page, pageSize: pageSize } });
                    return [3 /*break*/, 9];
                case 4:
                    _b.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, prisma.news.create({
                            data: req.body
                        })];
                case 5:
                    newNews = _b.sent();
                    res.status(201).json(newNews);
                    return [3 /*break*/, 7];
                case 6:
                    error_1 = _b.sent();
                    res.status(500).json({ error: "An error occurred while creating the newsSchool" });
                    return [3 /*break*/, 7];
                case 7: return [3 /*break*/, 9];
                case 8:
                    res.setHeader('Allow', ['GET', 'POST']);
                    res.status(405).end("Method " + method + " Not Allowed");
                    _b.label = 9;
                case 9: return [2 /*return*/];
            }
        });
    });
}
exports["default"] = handler;
