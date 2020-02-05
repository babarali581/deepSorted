# About deepSort


You can pass array or object in argument , it will sort it  and will sort all nested arrays and
objects's keys 


# Installation

npm i deepSort --save 


# Example

let x = ['b' , 'a' , {d: "ddd" , c: "ccc" , i : ['g' ,'f', 'h'] } , ['l' ,'k', 'j'] ,1  ]
let  y = deepSort(x)
//output
// [ 1, { c: 'ccc', d: 'ddd', i: [ 'f', 'g', 'h' ] },'a','b', [ 'j', 'k', 'l' ] ]