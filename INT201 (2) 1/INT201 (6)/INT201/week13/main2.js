//1. select target HTML object
const submitButton = document.querySelector('button')
// console.log(submitButton)
// 2 register handler function on a target HtML object
//add multiple handler functions on the same event type and HTML object
const doSomething = (e) => {
  console.log(`Good bye, ${e.target.id}`)
}
submitButton.addEventListener('click', (e) => {
  console.log(`hello, ${e.target.id}`)
})
submitButton.addEventListener('click', doSomething)
//จะทำตามลำดับของการadd function
//remove event listener
submitButton.removeEventListener('click', doSomething)
//เวลาลบให้ใส่ฟังก์ชั่น ถ้าใส่เป็นannonimous แบบ (e) => {
//  console.log(`hello, ${e.target.id}`)
//} นี้ไปเลยทำให้ลบออกไม่ได้ ต้องใส่แบบfunction ไปเลยdoSomething
