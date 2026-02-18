// fetch('https://jsonplaceholder.typicode.com/todos/5').then(resp=>console.log(resp));
// fetch('https://jsonplaceholder.typicode.com/todos/5')
// .then(resp=>{
//     console.log(resp);
//     if (!resp.ok){
//         throw new Error("Network response was not okay");
//     }else{
//         return resp.json();
//     }
    
    
//     return resp.json()})
// .then(data=>console.log(data));


// fetch('https://jsonplaceholder.typicode.com/todos/5').then(resp=>console.log(resp));
// 
//when we call async func we get promise in return
//async hai tabhi await aayegaaaa!!!!


async function getdata(url){
    //.then(data=>console.log(data));
    let resp= await fetch(url);
    let data= await resp.json();
    //console.log(data);
    return data;

}
getdata("https://jsonplaceholder.typicode.com/todos/5").then(data=>console.log(data));





