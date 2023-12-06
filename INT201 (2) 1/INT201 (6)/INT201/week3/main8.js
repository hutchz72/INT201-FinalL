if(undefined==null) console.log('undefined==null')
else consolelog('undefined!=null')

if(undefined===null) console.log('undefined===null')
else consolelog('undefined!==null')

// == do not care types but only check value
if('2'==2) console.log(`'2'==2`)
else console.log(`'2'!=2`)

//=== start to check data type first. if data types are not the same return false
//, other wise then check value
if('2'=== 2) console.log(`'2'===2`)
else console.log(`'2'!==2`)

//recommend to use === for equality and !== for inequality
//avoid to use == and !=

