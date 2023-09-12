"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imagesRoute_1 = __importDefault(require("./Routes/api/imagesRoute"));
var app = (0, express_1.default)();
var port = 8000;
var host = 'localhost';
app.use('/api', imagesRoute_1.default);
app.listen(port, listening);
function listening() {
    console.log("server running on localhost: ".concat(port));
    console.log("Server is running on http://".concat(host, ":").concat(port));
}
exports.default = app;
