function echo(msg) {
  return msg
}
//(import ใส่ชื่อไรก็ได้)
//default export ไม่ต้องใส่{}ที่import ใส่ชื่ออะไรก็ได้
//เลือกได้แค่หนึ่งจุดในโปรแกรมห้ามมีหลาย export default

//export default function sum(...nums) {
function sum(...nums) {
  let total = 0
  for (const num of nums) {
    total += num
  }
  return total
}
const MAX_VALUE = 100

//ES module
//name export
//export list
//export { sum, echo, MAX_VALUE}

//default export

//หรือจะทำแบบนี้ ก็ได้default export
export { sum as default }
