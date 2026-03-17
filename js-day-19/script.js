// async function getData(city){
//     try{
//         const API_key = "9353841aef0ee7e77d8eba2709e98120";
//         const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);
//         const data=await response.json();
//         console.log(city);
//         console.log(data.main.temp);
//         console.log(data.main.humidity);
//         console.log(data);
    
//     }catch(err){
//         console.error(err);
//     }
    
// }
// getData("london")

//Setting items
localStorage.setItem('usernmae','johndeo')
localStorage.setItem('theme','dark')


//getting it