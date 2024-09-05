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

// Functions
function calculeTax(income : number, taxYear = 2022) : number{
    if(taxYear < 2022)
        return income * 0.1
    return income * 0.2 
}

calculeTax(1000, 2023) //on ne peut passer à cette fonctions que le nombre d'arguments attendu

// Objects : un objet est une collection de propriétés, et une propriété est une association entre un nom (ou une clé) et une valeur

// let employe : {
//     readonly id : number, // readonly : la propriété ne peut pas être modifiée après l'initialisation
//     name : string,
//     retire : (date : Date) => void // une fonction qui prend un argument de type Date et ne retourne rien
// } = {
//     id : 1,
//     name : "Hamidou",
//     retire : function(date : Date){
//         console.log(date)
//     }
// }

// console.log(employe.retire(new Date()))

// employe.id = 2 // erreur car id est readonly

// Type Aliases : permet de définir un alias pour un type existant 
type Employe = {
    readonly id : number,
    name : string,
    retire : (date : Date) => void
}

let employe : Employe = {
    id : 1,
    name : "Hamidou",
    retire : function(date : Date){
        console.log(date)
    }
}

employe.retire(new Date())

// Union Types : permet de définir un type qui peut être l'un des plusieurs types
function kgToLbs(weight : number | string) : number {
    if(typeof(weight) === 'number')
        return weight * 2.20462
    else
        return parseInt(weight) * 2.20462
}

kgToLbs(50)
kgToLbs("50")


type Draggable = {
    drag : () => void
}

type Resizable = {
    resize : () => void
}

// Intersection Types : permet de combiner plusieurs types en un seul
type UIWidget = Draggable & Resizable

let texBox : UIWidget = {
    drag : function(){
        console.log("drag")
    },
    resize : function(){
        console.log("resize")
    }
}

// Literal Types : permet de définir un type qui peut être une valeur spécifique ou exacte
type Quantity = 50 | 100 // Quantity peut être 50 ou 100
let quantity : Quantity = 100 

type Metric = "kg" | "lbs"
let metric : Metric = "kg"

// Non Literal Types : permet de définir un type qui peut prendre n'importe quelle valeur spécifié dans le type 
function greet(name : string | null | undefined){
    if(name)
        console.log(name.toUpperCase())
    else
        console.log("Hola")
}

greet(undefined) // erreur car null n'est pas de type string

type Customer = {
    birthday? : Date
}

function getCustomer(id : number) : Customer | null | undefined {
    return id === 0 ? null : { birthday : new Date() }
}

let customer = getCustomer(1)
//if(customer != null && customer != undefined) //trop verbeux et redondant
//Propriété optionnelle : permet de définir une propriété qui peut être null ou undefined
console.log(customer?.birthday?.getFullYear()) // ?. permet de vérifier si customer est null ou undefined

// Optional element access operator
// customer?.[0] 

// Optional call
let log : any = null
log?.('a') // si log est null, la fonction ne sera pas appelée