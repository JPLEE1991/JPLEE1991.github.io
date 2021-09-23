
//페이지내 이동 부드럽게
      $(document).ready(function(){
          $('a[href^="#"]').on('click',function (e) {
              e.preventDefault();

              var target = this.hash;
              var $target = $(target);

              $('html, body').stop().animate({
                  'scrollTop': $target.offset().top
              }, 900, 'swing', function () {
                  window.location.hash = target;
              });
          });
      });
/*  */

    var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
  $(window).scroll(function(){
    if($('body, html').scrollTop() > 300){	
        $(".speech1 span").css("display","inline");
	    	$(".speech1 span").addClass("fade-in");
  	}	
  })


  
  /* page3 */
  //포스트잇 회전 효과

  $(".developer").hover(function(e){
    let $thisChildren = $(this.children[1])
    $thisChildren.slideToggle(800,'linear');
  })
  
  var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  

/* page4 */

var isVisible = false;

$(window).on('scroll',function() {
    if (checkVisible($('#salsaVideo'))&&!isVisible) {
        $("#salsa_article").fadeIn(2000);
        $("#salsa_img").fadeIn(2000);

        isVisible=true;
    }
});

function checkVisible( elm, eval ) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(), // Viewport Height
        scrolltop = $(window).scrollTop(),  // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();   
    
    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}

/* page4 end */



  /* bgm */
  var myAudio = document.getElementById("myAudio");

  function togglePlay() {
    return myAudio.paused ? myAudio.play() : myAudio.pause();
  };
  
  $(document).ready(function() { // smooth scroll 
    $('#aboutLink').click(function(event) { //#aTop,#aBot 를 지정함 
      var id = $(this).attr("href"); var offset = 60; var target = $(id).offset().top - offset; $('html, body').animate({scrollTop:target}, 500); event.preventDefault(); }); });
