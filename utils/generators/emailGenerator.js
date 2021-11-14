"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomNumeric = exports.getRandomEmail = void 0;
function getRandomEmail() {
    return "autotest" + getRandomNumeric(3) + "@gmail.com";
}
exports.getRandomEmail = getRandomEmail;
function getRandomNumeric(length) {
    return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1)).toString();
}
exports.getRandomNumeric = getRandomNumeric;
