const studentScores = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'DAVID', score: 79 },
  { name: 'Charlie', score: 68 },
  { name: 'David', score: 55 },
  { name: 'Eve', score: 78 },
  { name: 'david', score: 85 },
] //return student who has name equals to david with in casesensitive and score more than 80
const foundIndex = studentScores.findIndex(  
    (student) => student.name.toLowerCase() === 'eve')
console.log(foundIndex) //5
