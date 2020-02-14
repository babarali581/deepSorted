
function getSortedObjectKeys(o) {
    console.log("0000000000000 ",o);
    let a = [];
    
    for (let key in o) {
        if (o.hasOwnProperty(key)) {
            a.push(key);
        }
    }
    
    a.sort();
    console.log("keyyyyyyyyy ",a);
    const sortObj = a.reduce((acc, key) => {
        let {getSortNestedArray} = require("./getSortNestedArray")
        let getVal = o[key]

        let eachVal = typeof getVal === "string"
            ? "String"
            : typeof getVal === "number"
                ? "Number"
                : Array.isArray(getVal)
                    ? "Array"
                    : "Object"
       console.log("getVal ",getVal);
        if (eachVal === "String" || eachVal === "Number") {

            console.log('string: ', getVal);
            acc[key] = getVal

            return acc

        } else if (eachVal === "Object") {
            acc[key] = getSortedObjectKeys(getVal)

            return acc

        } else if (eachVal === "Array") {
            console.log("inside array");
            console.log(Array.isArray(getVal));
            let bbb = getSortNestedArray(getVal)
            console.log('getVal.sort(): ',bbb );
            acc[key] = getVal.sort()

            return acc

        }

    }, {})

    return sortObj;
}
module.exports.getSortedObjectKeys = getSortedObjectKeys
