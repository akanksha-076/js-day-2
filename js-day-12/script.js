//promise  :the constructor func. help us to create promise./ smart organization of callback func,
 //1.resolved
//2.pending
//3.rejected

// let mypromise = new Promise((resolved,rejected)=>{
//     // resolved("promise resolved");
//     //rejected("promise rejected");
//     //let data="Hello hru?"//for resolved
//     let data="";//for error
//     if (data){
//         resolved(data);
//     }else{
//         rejected("ERROR");
//     }
// });
// mypromise.then((data)=>{
//     console.log(data);

// }).catch((ERROR)=>{
//     console.log(ERROR);
// }); 
// // ,(ERROR)=>{
// //     console.log(ERROR);
// // });
// console.log(mypromise);

let resp=fetch("https://jsonplaceholder.typicode.com/todos/1");
resp.then((robj)=>{
    // console.log(robj);
    robj.json().then((data)=>{
        console.log(data);
    });
});
// console.log(Response);
