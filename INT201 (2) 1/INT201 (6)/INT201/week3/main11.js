let score = 50
let grade
//<40 =>'F', <40-70=>'B', 71-100 =>'A'
if (score < 0 && score > 100) grade = 'invalid scores'
else {
  if (score <= 40) grade = 'F'
  else if (score <= 70) grade = 'B'
  else grade = 'A'
}
console.log(grade)

let gradeMeaning
switch (grade) {
  case 'F':
    gradeMeaning = 'Improvement'
    break
  case 'B':
    gradeMeaning = 'Good'
    break
  case 'A':
    gradeMeaning = 'Very Good'
    break
  default:
    gradeMeaning = 'No meaning'
}
console.log(gradeMeaning)

let ch = 'O'
let isVowel = false
switch (ch) {
  case 'A':
  case 'a':
  case 'E':
  case 'e':
  case 'I':
  case 'i':
  case 'O':
  case 'o':
  case 'U':
  case 'u':
    isVowel = true
}
console.log(isVowel)

for (let index = 0; index < 10; index++) {
  console.log(index)
}
let nums = [10, 20, 30]
//for of
for (const num of object) {
  console.log(num)
}
//for in
let obj={id:1, title:'JS'}
for (const key in obj) {
    console.log(`${key}:${obj[key]}`)
}