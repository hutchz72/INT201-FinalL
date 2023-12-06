const submitButton = document.querySelector('button')
// console.log(submitButton)
submitButton.addEventListener('click', (e) => {
  //ยกเลิกเช่น ปกติมันต้องทำงงานกับ server แต่เรายกเลิก request ไปที่ server ถ้าอยาก request ต้องติดต่อเองแล้ว
  //submit จะไม่ทำงานตามที่ default ไม่ทำงาน
  e.preventDefault()
  const allInputElements = document.querySelectorAll('input')
  console.log(allInputElements)
  const isComplete = Array.from(allInputElements).every(
    (input) => input.value.length > 0
  )
  const pElement = document.getElementsByTagName('p')[0]
  if (isComplete) {
    pElement.textContent = 'Your input are complete'
  } else {
    pElement.innerHTML =
      '<span style="color:red"> Missing some value, plese enter</span>'
  }
})
