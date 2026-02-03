const task1=document.getElementById("porfile");
task1.style.backgroundColor="Tomato"
task1.style.padding='15px';
task1.style.textAlign='center';

const para=document.getElementsByClassName("abc")
console.log(para);
for (let i=0;i<para.length;i++){
    para[i].style.color="red"
    para[i].style.fontSize="50px"
}

console.log(para.length)