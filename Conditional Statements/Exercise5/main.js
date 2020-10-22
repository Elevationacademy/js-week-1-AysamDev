const a = 3
let b = 2
let c = 0 || 12 //12
let d

b = c //12
b++ //13
if(d){
  b = a
}

d = a + (b * c) //159
d++ //160
b += 2 //15

console.log(a)
console.log(b)
console.log(c)
console.log(d)
