let age : number = 1;

if (age < 50)
    age+=10

let sales : number = 123_456_789 // on peut séparer les chiffres avec des underscores

let course = "TypeScript" // sans l'annotation de type, TypeScript détecte automatiquement le type de la variable

let isPublished : boolean = true    

let level // le type de level est any

function render(document:string){ // sans annotation de type, nous avons une erreur
    console.log(document)
}

let numbers : number[] = [1,2,3,4] // le type de numbers est number[]

// tuples : un tableau avec un nombre fixe d'éléments dont les types sont connus ou chaque élément a un type spécifique
let user : [number, string] = [1, "Hamidou"]
user.forEach((element) => {
    console.log(element)
})

// Enums : permet de définir un ensemble de constantes nommées qui peuvent être assignées à une variable 
const enum Size { Small = 1, Medium, Large } // Small = 1, Medium = 2, Large = 3 par défaut
let mySize : Size = Size.Medium // mySize = 2
console.log(mySize) 

