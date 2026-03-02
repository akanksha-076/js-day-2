// let pro=new Promise((resolve,reject)=>{
//     let a=10;
//     if (a>50){
//         resolve()
//     }
//     else{
//         reject()
//     }

// })
// pro.then(()=>console.log("promise resolved"))
// .catch((err)=>console.error(err,"promise rejected"));

// promise consumer
// .then method- when the promise is resolved it will go to the .then method 
// when promise is rejected it will go to the .cathch method

// promise chening:when we use multiole .then method to achive the task or result .
// Promisein callback hell we did the same 
// code is hard to debug and structure is not good . 

// disadvantages : to perform certain task we need to call a callback fin multile time . more 
// fun for smaller task means more complexity and time for exectutiojn and fun call

function pro(num){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(num)
            res();
        },1000)

    })
   
}
// pro()
// .then(()=>console.log("1"))
// .then(()=>console.log("2"))
// .then(()=>console.log("3"))
// .then(()=>console.log("4"))
// .then(()=>console.log("5"))

// pro(1)
// .then(()=>pro(2))
// .then(()=>pro(3))
// .then(()=>pro(4))
// .then(()=>pro(5))
// .catch(()=>console.log("error"));

// console.log(pro());
let prores=Promise.resolve();
for(let i=1;i<=5;i++){
    prores=prores.then(()=>pro(i))
}