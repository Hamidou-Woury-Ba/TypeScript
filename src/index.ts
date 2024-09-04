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