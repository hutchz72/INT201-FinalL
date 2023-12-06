let str1 = 'apple'
let str2 = 'Apple'
let str3 = 'APPLE'
let str4 = 'apple'
console.log(str1 === str2) //'a' === 'A' return false
console.log(str1 !== str2) //'a'!==/A/ return true
console.log(str2 === str4) //'a'==='a', 'p'==='p', 'p'==='p', 'l'==='l', 'e'==='e' return true
//console.log(str.length)

console.log(str1.includes('App'))//false
console.log(str1.includes('app'))//true

//includes with case insensitive
console.log(str1.toLowerCase().incluides('App'.toLowerCase()))
console.log(str1.toLowerCase().incluides('App'.toLowerCase()))

// === vs includes() (case sensitive)
//'apple'.toLowerCase()

console.log(str1 < str2) //'a'<'A' 97<65 return false

