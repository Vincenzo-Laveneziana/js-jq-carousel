$(document).ready(function () {
  
  var leftArrow = $(".left_arrow > a");
  var rightArrow = $(".right_arrow > a");
  var activeImg = $("img.active");
  var prevImg = $(".active").prev("img"); 
  var nextImg = $(".active").next("img");


  var activeCircle = $("i.select")
  var prevCircle = $(".select").prev("i"); 
  var nextCircle = $(".select").next("i");

  activeCircle.click(function(){
    console.log("selec");
    
  });
  
  leftArrow.click(function(){
    left();
  });


  rightArrow.click(function(){
    right()
  });
  

  function riuseVar() {
    nextImg = $(".active").next("img");
    prevImg = $(".active").prev("img");
    prevCircle = $(".select").prev("i"); 
    nextCircle = $(".select").next("i");
  }


  function left(){

    
    if(activeImg.hasClass("first")){
      prevImg = $("img.last");
    }
    activeImg.removeClass("active");
    prevImg.addClass("active");
    activeImg = $(".active");

    if(activeCircle.hasClass("first")){
      prevCircle = $("i.last");
    }
    activeCircle.removeClass("select");
    prevCircle.addClass("select");
    activeCircle = $(".select");
    riuseVar()
  }


  function right(){
    if(activeImg.hasClass("last")){
      nextImg = $("img.first"); 
    }
    activeImg.removeClass("active");
    nextImg.addClass("active");
    activeImg = $(".active");
    riuseVar()

    if(activeCircle.hasClass("last")){
      nextCircle = $("i.first");
    }
    activeCircle.removeClass("select");
    nextCircle.addClass("select");
    activeCircle = $(".select");
    riuseVar()
  }


  $(document).keydown(function (e) { 
    console.log(e.keyCode);

    if(e.keyCode == 37){
      left();
    } else if(e.keyCode == 39){
      right();
    }

   /*  easter egg
    premendo sequenzialmente i tasti v-i-n
    automaticamente cambiarà tutte le immagini
    anche se rimane bloccato nel terzo if 
   */
   
    

    if(e.keyCode == 86){
      console.log("Cambio-1");
      $(document).keydown(function (e) { 

        if(e.keyCode == 73){
          console.log("Cambio-2");

          
          $(document).keydown(function (e) { 
            
            if(e.keyCode == 78){
              console.log("Cambio-3");
              //voglio che tutte le immagini siano cambiate
              alert("Easter egg sbloccato, per rivedere tutte le immagini ricarica la pagina ")
              activeImg = $("img");
              activeImg.attr( 'src',  "https://media.giphy.com/media/l4FGwoR4qzoaJxVW8/giphy.gif")
              
              $(".container").fadeOut(3000);
               
            }//if
            
          });
        }
      });
    } ;
  });
});