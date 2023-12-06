//require ตามด้วย path ที่โมดูลเราจะเอาเข้ามา
//const คือการกำหนดค่าให้มันconsole.logได้ ไม่เกี่ยวกับว่าอยู่ในconst แล้วจะเรียกจากutil.jsได้หมดนอกจากใส่ว่าให้คนอื่นเรียกใช้ได้
//syntax ของ common JS เป็นdestructuring
const { echo, MAX_VALUE } = require('./util.js')

//const { echo, sum } = require('./util')
//ถ้าเราไปดึงฟังก์ชั่นของ sum ที่เราไม่ได้ตั้งไว้ในหน้านั้น จะerror

console.log(echo('Practice make perfect'))

//console.log(sum(1, 5, 4))

console.log(MAX_VALUE)
