"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Basic Types
let id = 5;
let company = 'Jason Hargrove';
let isArtist = true;
let x = 'Hello';
let age;
x = true;
age = 47;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tupel
let person = [2, 'Hello', true];
// Tupel Array
let employee;
employee = [
    [1, 'Richard'],
    [2, 'Jaosn'],
    [3, 'Hargrove'],
];
// Union
let pId;
pId = 22;
pId = 'Gouache';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John',
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Function
const adNum = (x, y) => {
    return x + y;
};
// console.log(adNum(1, 2))
// Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Jason',
};
const p1 = 1;
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
