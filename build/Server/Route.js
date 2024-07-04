"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server");
server_1.app.get("/", function (req, res) {
    res.send("Hello world!");
});
server_1.app.get("/home", function (req, res) {
    res.send("I am MAHIB");
});
//# sourceMappingURL=Route.js.map