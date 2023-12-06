function ops(n1, n2, n3) {
  ;(arguments[0] = 1), (arguments[1] = 2), (arguments[2] = n3)
  console.log(atguments.length) //3
  arguments[0] = 555
  console.log(n1)
  //for (const argu of arguments) {
  //    console.log(argu) //1, true, 'xyz'
  //}
}
ops(1, true, 'xyz')

//----------------------------------------------------------------------------------------
function ops(n1, n2, n3) {
  for (const argu of arguments) {
    console.log(argu) //1, true, 'xyz'
  }
}
ops(1, true) //ส่งไม่ครบ //ช่องที่เหลือเป็น undefined

//------------------------------------------------------------------------------------

function ops(n1, n2, n3) {
  //formal parameters
  console.log('arguments length:', arguments.length)
  for (const argu of arguments) {
    console.log(argu) //1, true, 'xyz'
  }
  console.log('n3:', n3) //n3: [ 'xvz', 10.5, 100 ]
}
ops(1, true, 'xyz', 10.5) //รับแค่3 ตัวที่เกิดตัดทิ้ง
//actual parameters, arguments object stores collections at actual parameters

//-----------------------------------------------------------------
function sum(...nums) {
  return nums.reduce((total, current) => total + current, 0)
}
console.log(sum(1, 2, 3))
console.log(sum(1, 2, 3, 4, 5))
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
