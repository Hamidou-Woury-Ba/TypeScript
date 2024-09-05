"use strict";
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
//# sourceMappingURL=index.js.map