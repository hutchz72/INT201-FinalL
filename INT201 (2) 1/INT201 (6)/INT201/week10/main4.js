const nums = [10, 20, 30, 40, 50]
const obj = {
  id: 1001,
  title: 'JS Beginner',
  isbn: 7241326384,
  authors: { fullname: 'Jame Smith' },
}
const { m } = nums
const [num1, num2] = nums //destructuring on array variable
console.log(num1)
console.log(num2)

const { isbn } = obj //destructuring on object variable
const { isbn: bookId } = obj //การเปลี่ยนชื่อ
const { is } = obj
console.log(isbn) //7241326384
console.log(is) //undefined
console.log(bookId) //7241326384

const {
  authors: { fullname: authorName },
} = obj
const {
  authors: { fullname },
} = obj
console.log(authorName)
console.log(fullname)
