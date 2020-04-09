$(document).ready(function () {
  



  var leftArrow = $(".left_arrow > a");
  var rightArrow = $(".right_arrow > a");
  var activeImg = $("img.active");
  var prevImg = $(".active").prev("img"); 
  var nextImg = $(".active").next("img");
  

  function riuseVar() {
    nextImg = $(".active").next("img");
    prevImg = $(".active").prev("img");
  }

  leftArrow.click(function(){

    left();

  });
  
  function left(){
    if(activeImg.hasClass("first")){
      prevImg = $("img.last");
    }
    activeImg.removeClass("active");
    prevImg.addClass("active");
    activeImg = $(".active");
    riuseVar()
  }

  rightArrow.click(function(){
    console.log("yes right")
  });


});