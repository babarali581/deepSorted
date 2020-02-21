# deepsorting 


It accept single array or object in argument it will sort it inclues all nested arrays and objects .


# Installation

`npm i deepsorting --save`


Then... 

```
let x = ['b' , 'a' , {d: "ddd" , c: "ccc" , i : ['g' ,'f', 'h'] } , ['l' ,'k', 'j'] ,1  ]

let  y = deepsorting(x)

//output

// y  = [ 1, { c: 'ccc', d: 'ddd', i: [ 'f', 'g', 'h' ] },'a','b', [ 'j', 'k', 'l' ] ]


```