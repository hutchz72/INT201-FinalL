function greeting(someone) {
//    return 'hello, ' + someone
//backtick
return `hello, ${someone}`
}
console.log('Good Morning')
let name = 'Varittorn Siriwatcharakul'
console.log(name)
const totalStudent = 70
name = 100 //dynamic and weakly type
console.log(name)

console.log('My name is Varittorn Siriwatcharakul')
console.log(greeting('Varittorn Siriwatcharakul'))
console.log('Good Bye')

const obj = { id: 101}
const std={id:65130500072, name: 'Somchai' } //object is a collection of properties
//one property contains key and value(key:value)
//std = obj
std.name = 'Somying'//เปลี่ยนpropertiesได้แต่ห้ามเปลี่ยนReference
console.log(std)
const nums = [5, 10, 15, 20] //Array
console.log(nums)
//ไม่ต้องมีclass

const i = 5
i = 10