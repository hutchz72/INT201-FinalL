//optional chaining ?. มันจะส่งสตริงไปไม่ทำให้เกิดerror เป็นundefined แล้วไปต่อ
//let str //undefined  
let str = 'Guest'
console.log(str.toLowerCase())//ไม่ได้เพราะ มันคือไม่ได้กำหนดแล้วไปทำให้มันupper lowerอีกทำให้ไม่ได้ ไม่มีตัวตน

let nums
console.log(nums?.[0])

let obj
console.log(obj?.id)
