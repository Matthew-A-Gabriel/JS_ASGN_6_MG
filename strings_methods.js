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


let wordWhoseLettersAreBeingReplaced = "Amazing"
let nStr = ""
let checkingLetter = "a"
let replacingLetter = "b" 
let rLValue = 0

console.log("The letter that is replacing = " + replacingLetter)
console.log("the word that is being replaced = " + wordWhoseLettersAreBeingReplaced)
console.log("Letter that is being replaced = " + checkingLetter)
function replFunc(){
    let lRValue = 0
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
    for (var z = 0; z < lRValue; z++){
        if (wordWhoseLettersAreBeingReplaced[z].toLowerCase === checkingLetter.toLowerCase) {
            for(var m = 0 ; m < lRValue ; m++){
                if (m !== z) {
                    nStr + wordWhoseLettersAreBeingReplaced[m]
                } else {
                    nStr + replacingLetter 
                }
            }
            console.log(nStr)
        }
    }
}
replFunc()
console.log(nStr)


// Replace All
console.log("-Space-")
console.log("Replace All Recreation")


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