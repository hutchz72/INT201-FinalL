function echo(msg) {
  return msg
}
//function  ที่แปลงค่า เป็นทีละตัวแล้วเอามาบวกกัน
function sum(...nums) {
  let total = 0
  for (const num of nums) {
    total += num
  }
  return total
}
const MAX_VALUE = 100
//Common JS
//เป็นการยอมให้ที่อื่นๆใช้ฟังก์ชั่นของเราได้
//เรียกว่า syntax obj
module.exports = { echo, MAX_VALUE }
//จริงๆแล้วเป็นแบบนี้ แต่ชื่อ property ชื่อฟังก์ชั่น เป็นชื่อเดียวกันเลยลดรูปได้
//module.exports = { echo: echo, sum: sum }

//module.exports = { echo, sum }
//console.log(sum(1, 3, 4, 5))
