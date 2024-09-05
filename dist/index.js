"use strict";
var _a;
let age = 1;
if (age < 50)
    age += 10;
let sales = 123456789;
let course = "TypeScript";
let isPublished = true;
let level;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3, 4];
let user = [1, "Hamidou"];
user.forEach((element) => {
    console.log(element);
});
let mySize = 2;
console.log(mySize);
function calculeTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 0.1;
    return income * 0.2;
}
calculeTax(1000, 2023);
let employe = {
    id: 1,
    name: "Hamidou",
    retire: function (date) {
        console.log(date);
    }
};
employe.retire(new Date());
function kgToLbs(weight) {
    if (typeof (weight) === 'number')
        return weight * 2.20462;
    else
        return parseInt(weight) * 2.20462;
}
kgToLbs(50);
kgToLbs("50");
let texBox = {
    drag: function () {
        console.log("drag");
    },
    resize: function () {
        console.log("resize");
    }
};
let quantity = 100;
let metric = "kg";
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola");
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=index.js.map