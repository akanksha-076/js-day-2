//cache data
// cookies 
//WHY .JSON = SCATTER DATA CONVERT INTO JAVA SCRIPT OBJECT
//API fetching with aync await
async function getData(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users');
        const data=await response.json();
        console.log(data);
    
    }catch(err){
        console.error(err);
    }
    
}
getData()