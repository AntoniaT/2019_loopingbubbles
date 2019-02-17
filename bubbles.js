"use strict"
function createBubble(){
  let bubble = document.createElement("div");
  document.querySelector("#bubbles").appendChild(bubble);
}
function createBubbles(num){
  for(let i = 0; i < num; i++){
    createBubble();
  }}

createBubbles(256);

 function colorBubble(start, end, step, color){
   let i;
  for(let i = 1; i <= 16; i++){
     let bubble = document.querySelector("#bubbles").children[i];
     bubble.style.backgroundColor = "green";
  }
  for(let i = 16; i <= 32; i++){
    let bubble = document.querySelector("#bubbles").children[i];
    bubble.style.backgroundColor = "red";
 }
 for(let i = 32; i <= 40; i++){
  let bubble = document.querySelector("#bubbles").children[i];
  bubble.style.backgroundColor = "lightgreen";
}
for(let i = 46; i <= 50; i++){
  let bubble = document.querySelector("#bubbles").children[i];
  bubble.style.backgroundColor = "lightblue";
}
 for(let i = 56; i <= 128; i+=3){
  let bubble = document.querySelector("#bubbles").children[i];
  bubble.style.backgroundColor = "pink";
}
for(let i = 56; i <= 128; i+=5){
  let bubble = document.querySelector("#bubbles").children[i];
  bubble.style.backgroundColor = "orange";
}
for(let i = 56; i <= 128; i+=7){
  let bubble = document.querySelector("#bubbles").children[i];
  bubble.style.backgroundColor = "black";
}
for(let i = 1; i <= 255; i*=2){
  let bubble = document.querySelector("#bubbles").children[i];
  bubble.style.backgroundColor = "yellow";
} 
 for(let i = 64; i <= 255; i+=16){
  let bubble = document.querySelector("#bubbles").children[i];
  bubble.style.backgroundColor = "purple";
} 
for(let i = 8; i <= 256; i+=16){
  let bubble = document.querySelector("#bubbles").children[i];
  bubble.style.backgroundColor = "hotpink";
}
for(let i = 0; i <= 256; i+=17){
  let bubble = document.querySelector("#bubbles").children[i];
  bubble.style.backgroundColor = "cyan";
}

  console.log(start, end, step, color);
} 
colorBubble();


/* 

TRYING TO MAKE IT LESS REPEATY - under progress

function colorBubble(start, end, step, color){
 // let bubble = document.querySelector("#bubbles").children[1];
  let i;
  for(let i = 1; i <=bubble.length; i++){
    bubble[i].style.backgroundColor = "green";
    //console.log(bubble + "I am green");
  }
  for(let i = 2; i <=bubble.length; i++)
  bubble[i].style.backgroundColor = "red";


}
colorBubble(0, 16, 1, "green"); */