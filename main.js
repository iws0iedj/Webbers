var homeBtn = document.getElementById("home");
var aboutBtn = document.getElementById("about");
var servicesBtn = document.getElementById("services");




homeBtn.addEventListener("click" , function(){


homeBtn.classList.add("click");
homeBtn.classList.remove("noClick");

changeBackgroundColor(aboutBtn , servicesBtn);
});


aboutBtn.addEventListener("click" , function(){


aboutBtn.classList.add("click");
aboutBtn.classList.remove("noClick");

changeBackgroundColor(homeBtn , servicesBtn);
});




servicesBtn.addEventListener("click" , function(){


servicesBtn.classList.add("click");
servicesBtn.classList.remove("noClick");

changeBackgroundColor(homeBtn , aboutBtn);
});



function changeBackgroundColor( a ,  b){

  if(a.classList.contains("click")){
    a.classList.remove("click");
    a.classList.add("noClick");
  }

  else{
      b.classList.remove("click");
    b.classList.add("noClick");
  }

}