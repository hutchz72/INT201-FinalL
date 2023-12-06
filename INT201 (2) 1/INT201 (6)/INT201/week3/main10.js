const a = [1, 2, 3] //a= memory address
const b = [1, 2, 3] //b= memory address
console.log(a === b) //memory address of a === memory address of b

const c = b //alias give memory address of b to c
console.log(c === b) // true
c[0] = 'A'
console.log(b) //['A', 2, 3]
console.log(c) //['A', 2, 3]

a[0] = 555
console.log(a)
console.log(b)
console.log(c)

//object date types is an object

const x = { id: 1, title: 'JS'}
const y = { id: 1, title: 'JS'}
const z = y //give memory address of y to z
console.log(x === y) //memory address of x === memory address of y //false
console.log(y === z) //memory address of y === memory address of z //true

y.id = 888
console.log(x) //{ id: 1, title: 'JS'}
console.log(y) //{ id: 888, title: 'JS'}
console.log(z) //{ id: 888, title: 'JS'}

//primitive
let m = 5 //m stores 5
let n = 10 //m stores 10
let o = n //n assign 10 to o then o stores 10
m = 999 //m reassign to 999 then m stores 999
o = 1000 //o reassign to 1000 then o stored 1000
console.log(o === n) //1000 === 10 //false
console.log(m) //999
console.log(n) //10
console.log(o) //1000