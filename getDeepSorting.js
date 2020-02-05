const getSortNestedArray = require("./helper/getSortNestedArray")
const getSortedObjectKeys = require('./helper/getSortObject')


function deepSort(arr) {
    if(Array.isArray(arr)){
    let finalResp = arr.reduce((acc, val) => {

        let eachVal = typeof val === "string"
        ? "String"
        : typeof val === "number"
            ? "Number"
            : Array.isArray(val)
                ? "Array"
                : "Object"

        /* In case of string */
        if (eachVal === "String" || eachVal === "Number") {
            console.log("inside");
             return acc.concat(val)
            // return !acc.includes(val)
            //     ? acc.concat(val)
            //     : acc
        } else if (eachVal === "Object") {

            val = getSortedObjectKeys(val)
            return !acc.includes(val)
                ? acc.concat(val)
                : acc

        } else if (eachVal === "Array") {

            val = getSortNestedArray(val)

            return [...acc , val]

        }

    }, [])
    return finalResp.sort()
 }else if(typeof arr === "object"){
     console.log("inside object");
     return getSortedObjectKeys(arr)
 }else{
     return new Error("You should provide array or object")
 }
}

let aa = deepSort(['a' , 'c' ,'f' , 'b' , {c :'cc' , a: "aa"}])
console.log("aa ",aa);
module.exports = deepSort