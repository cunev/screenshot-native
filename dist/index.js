"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toURL = exports.encode = exports.screenshot = exports.screenSize = exports.getRegion = void 0;
var libnut_1 = __importDefault(require("@nut-tree/libnut"));
var buffer_to_data_url_1 = __importDefault(require("buffer-to-data-url"));
var encode_module = require('image-encode');
function getRegion(x1, y1, x2, y2) {
    return libnut_1.default.screen.capture(x1, y1, x1 + x2, y1 + y2);
}
exports.getRegion = getRegion;
function screenSize() {
    return libnut_1.default.getScreenSize();
}
exports.screenSize = screenSize;
function screenshot() {
    var screensize = screenSize();
    return getRegion(0, 0, screensize.width, screensize.height);
}
exports.screenshot = screenshot;
function encode(raw, format) {
    var encoded = encode_module(raw.image, [raw.width, raw.height], format);
    return Buffer.from(encoded);
}
exports.encode = encode;
function toURL(buffer) {
    return (0, buffer_to_data_url_1.default)('image/png', buffer);
}
exports.toURL = toURL;
//# sourceMappingURL=index.js.map