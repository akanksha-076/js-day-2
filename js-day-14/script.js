// console.log("frist line")
// setTimeout(()=>{
//     console.log("interval")
// },0)
// const p=new Promise((resolve,reject)=>{
//     resolve()
// })
// p.then(()=>{
//     console.log("inside promise")
// })
// const p2=new Promise((resolve,reject)=>{
//     resolve()
// })
// p2.then(()=>{
//     console.log("inside promise")
// })
    

// console.log("last line")


// const options = {method: 'GET', headers: {Authorization: 'Bearer zpka_ad2cf9fe46684cac8bdd908ab2cdb493_5f462f1c'}};

// fetch('https://dataservice.accuweather.com/locations/v1/cities/search?q=delhi', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
const options = {method: 'GET', headers: {Authorization: 'Bearer zpka_ad2cf9fe46684cac8bdd908ab2cdb493_5f462f1c'}};

fetch('https://dataservice.accuweather.com/locations/v1/:202396', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));