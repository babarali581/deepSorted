
const getSortNestedArray = (arr) => {
    console.log('arr: ', arr);
    let finalResp = arr.reduce((acc, val) => {
        let {getSortedObjectKeys} = require('./getSortObject')

        let eachVal = typeof val === "string"
            ? "String"
            : typeof val === "number"
                ? "Number"
                : Array.isArray(val)
                    ? "Array"
                    : "Object"

        /* In case of string */
        console.log("val ", typeof val);
        console.log("eachVal ", eachVal);
        if (eachVal === "String" || eachVal === "Number") {
            console.log("inside number and string");
            return [
                ...acc,
                val
            ] //acc.concat(val)
        } else if (eachVal === "Object") {
            console.log("inside object");
            val = getSortedObjectKeys(val)
            return [
                ...acc,
                val
            ] //acc.concat(val)

        } else if (eachVal === "Array") {
            console.log("inside array in nested array");
            let bab = getSortNestedArray(val)

            return [
                ...acc,
                bab
            ]
        }

    }, [])
    return finalResp.sort()
}

module.exports.getSortNestedArray = getSortNestedArray;