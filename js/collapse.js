function pullDown() {
  console.log("pull-down");

  w3.show("#newsletter");
  w3.removeClass("#newsletter", "anime-push-up");
  w3.addClass('#newsletter', "anime-pull-down");
//  document.getElementById('newsletter').addClass("anime-pull-down");
}

function pushUp() {
  console.log("push-up");

  w3.removeClass("#newsletter", "anime-pull-down");
  w3.addClass("#newsletter", "anime-push-up");
  w3.hide("#newsletter");
}

/*
function M(X) {
  $.cookie("newsletter-status","off",{expires:7,path:"/"});
  nh=$("#newsletter").show().height();
  h=$("#header").height()-nh;
  $("#newsletter").animate({marginTop:"-"+nh+"px"},X,D,function(){$(this).removeClass("open")});
  $("#content").animate({marginTop:""+h+"px"},X,D,function(){});
  $(".menu-item-13").removeClass("current-menu-item-grey")
}

function x(X) {
  if ($("#newsletter").hasClass("open")) {}
  else {
    $.cookie("newsletter-status","on",{expires:7,path:"/"});
    $("#newsletter").addClass("open").show();
    nh=$("#newsletter").height();
    h=$("#header").height()+nh;
    $("#newsletter").animate({marginTop:"0px"},X,function(){});
    $("#content").animate({marginTop:""+h+"px"},X,function(){});
    $(".menu-item-13").addClass("current-menu-item-grey")
  }
}

$("body").on("click","#newsletter-close",function() {M(N)});

function E(Y,X) {if($("#project-title").length){$("#para .meta").fadeTo(X,0,function(){$("#para").removeClass("show").slideUp(Y,D,function(){$("#para .meta").hide()})});$(".plus").rotate({duration:100,animateTo:0});$(".project-detail").html("Project Detail")}}
function b(Y,X) {if($("#project-title").length){$("#para .meta").hide();$("#para").addClass("show").slideDown(Y,D,function(){$("#para .meta").fadeTo(X,1)});$(".plus").rotate({duration:100,animateTo:45});$(".project-detail").html("Close Details")}}$("body")
.on("click",".project-detail-trigger",function(X){X.preventDefault();if($("#para").hasClass("show")){E(500,300)}else{b(500,300)}});$("body")
.on("click",".menu-item a",function(X){X.preventDefault();if(!$(this).parent().hasClass("menu-item-13")){}else{}});$("body")
*/
