$(document).ready(function () {
  
  var leftArrow = $(".left_arrow > a");
  var rightArrow = $(".right_arrow > a");
  var activeImg = $("img.active");
  var prevImg = $(".active").prev("img"); 
  var nextImg = $(".active").next("img");
  
  leftArrow.click(function(){
    left();
  });


  rightArrow.click(function(){
    right()
  });
  

  function riuseVar() {
    nextImg = $(".active").next("img");
    prevImg = $(".active").prev("img");
  }


  function left(){
    if(activeImg.hasClass("first")){
      prevImg = $("img.last");
    }
    activeImg.removeClass("active");
    prevImg.addClass("active");
    activeImg = $(".active");
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
  }


  $(document).keydown(function (e) { 
    console.log(e.keyCode);

    if(e.keyCode == 37){
      left();
    } else if(e.keyCode == 39){
      right();
    }

    //easter egg da implementare al momento non funzionante
    if(e.keyCode == 86){
      if(e.keyCode == 73){
        if(e.keyCode == 78){
          $("img.active").html('<img class="first active" src="https://media.giphy.com/media/llOz4zgQCyCoYaRmBq/giphy.gif" ">')
        }
      }
    }
    
  });
  
});