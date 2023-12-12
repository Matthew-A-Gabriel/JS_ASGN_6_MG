const strings = "strings"
console.log("Starting Log" + " - " + strings)
console.log ("Length Recreation")

// Length
function lengthFunction() {
    let lValue = 0
    for (var i = 0; i < i+1; i++) {
        if(strings[i] === undefined){
            console.log("string ends")
            break
        } else {
            lValue++
            console.log(strings[i])
        }
    }
    console.log("length is " + lValue)
}
lengthFunction()



// Slice
console.log("-Space-")
console.log("Slice Recreation")

function sliceFunction() {
    let sInput = 1
    let eInput = 3
    let sString = ""
    for (var i = sInput; i < eInput; i++ ){
        if(strings[i] === undefined){
            console.log("string ends")
            break
        } else {
            sString += strings[i]
        }
    }
    console.log("starting at the " + sInput + " letter - " + strings[sInput])
    console.log("ending at the " + eInput + " letter - " + strings[eInput - 1])
    if (strings[sInput] === undefined){
        console.log("the resulting string has a undefined value")
    } 
    else if (strings[eInput] === undefined){
        console.log("the resulting string has a undefined value")}
    else{
        console.log("the resulting string is - " + sString)
    }
}
sliceFunction()

// Replace
console.log("-Space-")
console.log("Replace Recreation")


let wordWhoseLettersAreBeingReplaced = "adore"
let nStr = ""
let checkingLetter = "d"
let replacingLetter = "G" 
let countingTheTimes = 0
let lRValue = 0
let index = -1

function lengthFunctionForReplace() {
    for (var i = 0; i < i+1; i++) {
        if(wordWhoseLettersAreBeingReplaced[i] === undefined){
            break
        } else {
            lRValue++
        }
    }
}
lengthFunctionForReplace()

console.log("The letter that is replacing = " + replacingLetter)
console.log("the word that is being replaced = " + wordWhoseLettersAreBeingReplaced)
console.log("Letter that is being replaced = " + checkingLetter)

function replFunc(){
    for (var z = 0; z < lRValue; z++){
        if (wordWhoseLettersAreBeingReplaced[z] === checkingLetter){
            index = z
        }
    }

    for (var i = 0; i < lRValue; i++){
        if (i === index && countingTheTimes === 0){
            nStr += replacingLetter
            countingTheTimes++
        } else {
            nStr += wordWhoseLettersAreBeingReplaced[i]
        }
    }
}
replFunc()
console.log(nStr)


// Replace All
console.log("-Space-")
console.log("Replace All Recreation")

let wordWhoseLettersAreBeingReplaced2 = "amazing"
let nStr2 = ""
let checkingLetter2 = "a"
let replacingLetter2 = "T" 
let countingTheTimes2 = 0
let lRValue2 = 0
let index2 = []

function lengthFunctionForReplace2() {
    for (var i = 0; i < i+1; i++) {
        if(wordWhoseLettersAreBeingReplaced2[i] === undefined){
            break
        } else {
            lRValue2++
        }
    }
}
lengthFunctionForReplace2()

console.log("The letter that is replacing = " + replacingLetter2)
console.log("the word that is being replaced = " + wordWhoseLettersAreBeingReplaced2)
console.log("Letter that is being replaced = " + checkingLetter2)

function replFunc2(){
    for (var z = 0; z < lRValue2; z++){
        if (wordWhoseLettersAreBeingReplaced2[z] === checkingLetter2){
            index2.push(z)
        }
    }

    for (var i = 0; i < lRValue2; i++){
        if (i === index2[countingTheTimes2]){
            nStr2 += replacingLetter2
            countingTheTimes2++
        } else {
            nStr2 += wordWhoseLettersAreBeingReplaced2[i]
        }
    }
}
replFunc2()
console.log(nStr2)

// Concat
console.log("-Space-")
console.log("Concat Recreation")

var string1 = "apple"
console.log("string 1 - " + string1)
var string2 = "cider"
console.log("string 2 - " + string2)
var concatedString = ""

function concatFunction() {
    concatedString = string1 + " " + string2
    console.log("Concacted String - " + concatedString)
}
concatFunction()

// CharAt
console.log("-Space-")
console.log("CharAt Recreation")
var letterAt = ""
var inputString = "NYEHAH!"
var charWanted = 3
function charAtFun() {
    console.log("You want to View the string - " + inputString)
    console.log("You want to get the " + charWanted + " letter!")
    letterAt = inputString[charWanted - 1]
    console.log("Your selected Character was! " + letterAt)
}
charAtFun()

console.log("END LOGs")