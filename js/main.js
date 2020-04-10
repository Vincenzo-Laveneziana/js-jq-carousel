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

    //easter egg da implementare al momento non funzionante
   
        if(e.keyCode == 78){
          activeImg.attr('<img src="https://media.giphy.com/media/llOz4zgQCyCoYaRmBq/giphy.gif" ">')
        }
      
    
  });
  
});