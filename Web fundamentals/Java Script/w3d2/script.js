var h1 = document.querySelector(".tittle");
console.log(h1);
var title= document.getElementById("title");
console.log (title)
title.innerHTML="Hello New World";
function clickedButton(){
    alert('button is clicked')
}
function setactive(element){
    if(element.innerHTML==='switch to dark mode'){
        element.style.backgroundColor = "#22222";
        element.style.color = "#ffffff";
        element.innerText="switch to light mode";

    }
   else{
    element.style.backgroundColor = "#ffffff";
        element.style.color = "#222222";
        element.innerText="switch to dark mode";

   }
   function getName(element){
    console.log(element.value)
   }
   function turnoff(element){
    element.innerText ='OFF'

   }
}