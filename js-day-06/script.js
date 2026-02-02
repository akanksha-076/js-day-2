//id traversal
const element=document.getElementById("hello");
console.log(element);
console.log(element.textContent);

element.textContent="hello india!";

element.style.color="tomato";
element.style.backgroundColor="yellow"; 

//class traversal
const para=document.getElementsByClassName("para");
console.log(para);
for (let i=0;i<para.length;i++){
    para[i].style.backgroundColor="cyan"
}

//query selector
const qs=document.querySelector("#content p")
console.log(qs);
qs.textContent="asdfghjkjhgfdsdfghjkkjhgfdsdfghjhgfxz";




