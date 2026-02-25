console.log("frist line")
setTimeout(()=>{
    console.log("interval")
},0)
const p=new Promise((resolve,reject)=>{
    resolve()
})
p.then(()=>{
    console.log("inside promise")
})
const p2=new Promise((resolve,reject)=>{
    resolve()
})
p2.then(()=>{
    console.log("inside promise")
})
    
console.log("last line")


