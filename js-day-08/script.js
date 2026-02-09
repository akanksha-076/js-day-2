//create a new elemnt and set its content
const newpara=document.createElement("p");
newpara.textContent="hihihihihihihhhihh";
console.log(newpara);

//append the new element to the container
const container=document.getElementById("abc");
container.appendChild(newpara);

// Remove the <p> element from the container
const remov=document.querySelector("#abc p").remove();

const image=document.createElement("img");
image.setAttribute("src","https://krmangalam.edu.in/_next/image?url=%2Flife-at-krmu%2Finfra.webp&w=3840&q=75")
image.setAttribute("alt","K.R.Mangalam")
const gallery=document.getElementById("hii")
gallery.appendChild(image)

//date method
const today=new Date()
console.log(today)
setInterval(()=>{
    let date=new Date()
    console.log(date)
    let hour=date.getHours();
    let min=date.getMinutes();
    let second=date.getSeconds();

    let clock=document.getElementById("digi-clock")
})


