var arr = []
for (let index = 0; index < 3; index++) {
    arr.push(()=>index)
    
}

var newArr = arr.map((el)=>el())

console.log(newArr)