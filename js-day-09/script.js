// function handleClick(){
//     document.getElementById("btn").textContent='clicked'
//     document.getElementById("btn").style.backgroundColor="cyan"
    
// }
function handleclicks(){
    document.getElementById("head").textContent="New Heading"
    document.getElementById("head").style.color="tomato"

}
// function handleClick(){
//     const spanEle=document.createElement("span").textContent="hello im span element"
//     const image=document.createElement("img");
//     image.setAttribute("src","https://krmangalam.edu.in/_next/image?url=%2Flife-at-krmu%2Finfra.webp&w=3840&q=75")
//     image.setAttribute("alt","K.R.Mangalam")
//     const gallery=document.getElementById("content")
//     gallery.append(image)
//     gallery.append(spanEle)

// }
document.getElementById("btn").addEventListener("click",()=>{
    const spanEle=document.createElement("span").textContent="hello im span element"
    const image=document.createElement("img");
    image.setAttribute("src","https://krmangalam.edu.in/_next/image?url=%2Flife-at-krmu%2Finfra.webp&w=3840&q=75")
    image.setAttribute("alt","K.R.Mangalam")
    const gallery=document.getElementById("content")
    gallery.append(image)
    gallery.append(spanEle)
})

