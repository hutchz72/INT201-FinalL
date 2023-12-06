function echo(msg) {
  return msg
}

export function sum(...nums) {
  let total = 0
  for (const num of nums) {
    total += num
  }
  return total
}
const MAX_VALUE = 100
//ES module
//name export ชื่อที่export

//export list ลิสต์ออกมาเลยจะให้export อะไร
export { sum, echo, MAX_VALUE }
