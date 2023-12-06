//correct, give one string selector
const firstNode1 = document.querySelector('#int101, .courses, #p-01')
console.log(firstNode1)//ลำดับไม่มีผล ถ้าเป็น''คลุมหมดอ้างอิงตามdoc ที่เจอ (# = id . = class)

//incorrect, give more than one string selector
const firstNode2 = document.querySelector('#int101', '.courses', '#p-01')
console.log(firstNode2)//จะสนลำดับ