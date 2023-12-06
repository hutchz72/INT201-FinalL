const programmingLect = document.querySelectorAll('.programming')
//NodeList implement for each,not all array function implement
console.log(programmingLect)
programmingLect.forEach((pl) => {
  console.log(pl)
  console.log(pl.nodeName)
  console.log(pl.nodeType)
  console.log(pl.nodeValue)
  console.log(pl.attributes) //get all attributes of element //NamedNodeMap does not implement for each
  //collection ที่คืนมามันไม่ใช่ arrayจึงต้องแปลงค่า เป็น arrayก่อนแล้วค่อยใช้ foreachเพื่อดูทีละตัว หรือ forloop
  Array.from(pl.attributes).forEach((attr) => console.log(attr))
})

const pEle = document.getElementById('p-01')
const pEleAttributes = pEle.attributes
console.log(pEleAttributes)
console.log(pEleAttributes.lenght)
Array.from(pEleAttributes).forEach((attr) => {
  console.log(attr.name)
  console.log(attr.value)
})
console.log(pEle.getAttribute('id')) //กรณีเรารู้ชื่อ

const ulEle = document.getElementsByTagName('ul')
//return HTMLCollection -array-like, not implement forEach
const ulEleArray = Array.from(ulEle)
ulEleArray.forEach((ul) => console.log(ul))
// Array.from(ulEle).forEach((ul) => console.log(ul))
