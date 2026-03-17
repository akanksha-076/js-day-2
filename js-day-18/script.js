//cache data
// cookies 
//WHY .JSON = SCATTER DATA CONVERT INTO JAVA SCRIPT OBJECT
//API fetching with aync await
async function getData(){
    try{
        const API_KEY=""
        const response=await fetch(`https://api.opemweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=matric`);
        const data=await response.json();
        console.log(city);
        console.log(data.main.temp);
        console.log(data.main.humidity);
        console.log(data);
    
    }catch(err){
        console.error(err);
    }
    
}
getData("london")