import { CookieUtil } from './cookieUtil.js'
// document.cookie = 'username=Varittorn'
// document.cookie = 'course=INT201'
// document.cookie = 'credit=3'
// document.cookie = 'credit=2'//ชื่อซ้ำ แทนที่ค่าล่าสุดให้
// const currentCookie = document.cookie
// console.log(currentCookie)
// console.log(CookieUtil.get('course'))

//new Date(year, monthIndex, day)

CookieUtil.set('username', 'Varittorn', new Date(2023, 11, 25))
CookieUtil.set('course', 'INT201', new Date(2023, 11, 31))
CookieUtil.set('credit', '2', new Date(2024, 0, 1))
//indexof 0 and 11
//get เหมือนกันแสดงค่า console.logออกมา

console.log(CookieUtil.get('username'))
console.log(CookieUtil.get('course'))
//ทำให้ credit หายและตอน get เป็น undefined
console.log(CookieUtil.unset('credit'))
console.log(CookieUtil.get('credit'))
