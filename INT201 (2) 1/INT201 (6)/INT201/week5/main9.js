const str=[...'hello world']

for (const [ind,value] of str.entries()) {
    console.log(ind)
    console.log(value)
}
//for (const entry of str.entries()) {
//    console.log(entry) แยกString ทีละตัว
//}