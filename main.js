let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n=>n.
  addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })  )

  const plus=document.querySelector(".primary-text"), 
        number=document.querySelector(".paragraph-span");
    let a=0;
    plus.addEventListener("click",function(){
        a++;
        number.innerText=a;
        let audio=document.getElementById("berkan")
        audio.play();
    }) 


    let music=document.querySelectorAll(".cards-button-one");
        
        music[0].addEventListener("click", function(){
          let audio=document.getElementById("card-one")
          audio.play();
        })
        music[1].addEventListener("click", function(){
          let card2=document.getElementById("card-two")
          card2.play();
        })
        music[2].addEventListener("click", function(){
          let card3=document.getElementById("card-three")
          card3.play();
        })
       
     
       