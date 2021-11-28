var charcter = document.getElementById("charcter")
var block =document.getElementById("block")
let live = false
let state = { 
    name : " your score : " ,
    score : 0 
}

let startbtn  = document.getElementById("start-btn")
let liv = document.getElementById("live")
var statePl = document.getElementById("player-st")
statePl.textContent = state.name + 0
function jump(){
    if (charcter.classList != "animate") 
    {
        charcter.classList.add("animate")
      setTimeout(function()
      { 
        charcter.classList.remove("animate")
       },700)
    }
}
setInterval(function() {
    var charactertop = parseInt(window.getComputedStyle(charcter).getPropertyValue("top"));
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockleft<40 && blockleft>10 && charactertop>=330){
        
       
        charcter.classList.remove("animate")
        block.classList.remove("animate2")
      /*  block.style.animation= "none"*/
      /*  block.style.display = "none"*/
        live = false
        state.score = 0
        statePl.textContent = state.name + state.score
        liv.textContent = "you lost"
    }
    
}, 10);

window.addEventListener("keydown", function (event) {
    if (event.keyCode='x' ||( event.keyCode='espace')){
   //     console.log(event.keyCode)
jump()
      return; // Do nothing if the event was already processed
    }
  
    
}) 
    startbtn.addEventListener("click" , function restart(){
        block.classList.add("animate2")
        live = true
        liv.textContent = " "
        
    })

    setInterval(function score()  {
        if(live == true){
        state.score += 2
        statePl.textContent = state.name + state.score
        }
    }, 200);

    setInterval(function score()  {
        let dr =3000
        dr -=1
        
        block.style.animationDirection = String(dr) + "ms"
        console.log( block.style.animationDirection)
    }, 200)