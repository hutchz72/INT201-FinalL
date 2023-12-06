//nullish coalescing ??
/*
let nums
let arr = [] //undefined null show  [123]
arr = nums ?? [1, 2, 3]
console.log(arr)
console.log(arr.length)*/

let nums = [1, 2, 3]
let arr
arr = nums ?? [] //มีค่าแสดงค่าของตัวมัน //ไม่มีค่าundefined/null จะแสดงตัวหลัง ??
console.log(nums)
console.log(arr)
