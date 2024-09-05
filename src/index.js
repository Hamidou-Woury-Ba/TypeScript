var age = 1;
if (age < 50)
    age += 10;
var sales = 123456789; // on peut séparer les chiffres avec des underscores
var course = "TypeScript"; // sans l'annotation de type, TypeScript détecte automatiquement le type de la variable
var isPublished = true;
var level; // le type de level est any
function render(document) {
    console.log(document);
}
var numbers = [1, 2, 3, 4]; // le type de numbers est number[]
// tuples : un tableau avec un nombre fixe d'éléments dont les types sont connus ou chaque élément a un type spécifique
var user = [1, "Hamidou"];
user.forEach(function (element) {
    console.log(element);
});
var mySize = 2 /* Size.Medium */; // mySize = 2
console.log(mySize);
// Functions
function calculeTax(income, taxYear) {
    if (taxYear === void 0) { taxYear = 2022; }
    if (taxYear < 2022)
        return income * 0.1;
    return income * 0.2;
}
calculeTax(1000, 2023); //on ne peut passer à cette fonctions que le nombre d'arguments attendu
// Objects : un objet est une collection de propriétés, et une propriété est une association entre un nom (ou une clé) et une valeur
var employe = {
    id: 1,
    name: "Hamidou",
    retire: function (date) {
        console.log(date);
    }
};
console.log(employe.name);
// employe.id = 2 // erreur car id est readonly
console.log(4 + "5"); // 45
