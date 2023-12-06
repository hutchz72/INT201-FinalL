let someone = 'a' //empty String
let who //who = undefined ถ้าอยากได้nullต้องกำหนดเอง
console.log(typeof someone) //String
let discount = 0
/*let*/var x = 5
console.log(x)//5
if (someone) {
  /*let*/var x = 1
  console.log(x)//1
  who = 'member'
  discount = 0.1
} else {
  /*let*/ var x = 2
  console.log(x)//2
  who = 'guest'
  discount = 0.05
}
console.log(x)
console.log(who)
console.log(discount)
//var เป็นการเปลี่ยนค่าไปจากตัวเดิมrecreateตัวแปรใหม่ตลอดเวลาไปส่้งผลเสียต่อการเขียนโปรแกรมในบล็อคสโคป
//?: if-else with expression ให้เขียนแบบนิพจน์
//someone ? (who = 'member') : (who = 'guest')
//let who = someone ? 'member' : Math.random()*3+4/5
//who = someone ? 'member' : 'guest'
//console.log(who) //guest
