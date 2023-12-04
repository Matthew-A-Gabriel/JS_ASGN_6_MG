const strings = "strings"
console.log("Starting Log" + " - " + strings)
console.log ("length recreation")

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
console.log("Slice Receation")

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



// Replace All



// Concat



// CharAt



// 



// 