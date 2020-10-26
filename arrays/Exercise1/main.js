const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
let genes1 = [...genes]
genes1[2] = genes[genes.length - 1]
genes1[genes1.length - 1]= genes[2]

console.log(genes1)


let save = genes1.splice(3,1)
genes1.push(save[0],save[0])
genes1.unshift("FXT")
console.log(genes1)