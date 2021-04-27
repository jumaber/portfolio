/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-56px";
  }
  prevScrollpos = currentScrollPos;
}


/* Slides on About Section on Index */

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function enableSwipe() {
  console.log('enable swipe called');
  var containerElement = document.querySelector('.slideshow-container');
  var activeRegion = ZingTouch.Region(containerElement);
  var childElement = document.querySelector('.mySlides.current');

  activeRegion.bind(childElement, 'swipe', function(e){
      //Perform Operations
      const angle = e.detail.data[0].currentDirection;
      console.log('e.detail.data[0].currentDirection --->', e.detail.data[0].currentDirection)
      if ((angle >= 315 && angle <= 360) || (angle <= 45 && angle >= 0)) {
      console.log("swipe right");
      plusSlides(1);
      (e.detail.events).forEach(_e => _e.originalEvent.preventDefault());
      return;
    }
    else if (angle >= 135 && angle <= 225) {
      console.log("swipe left");
      plusSlides(-1);
      (e.detail.events).forEach(_e => _e.originalEvent.preventDefault());
      return;
    }
    else if (angle <= 135) {
      console.log("swipe right with UP");
      plusSlides(1);
      (e.detail.events).forEach(_e => _e.originalEvent.preventDefault());
    } else {
      console.log("swipe right with DOWN");
      plusSlides(-1);
      (e.detail.events).forEach(_e => _e.originalEvent.preventDefault());
      return;
    }
  });
}

// Run once page load
enableSwipe();

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].className = "mySlides";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].className += " current";
  dots[slideIndex - 1].className += " active";
  enableSwipe();
}


/* Read More button on About that displays the rest of the text */

function ReadMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("aboutBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

/* Linsenpate Typography Horizontal Scroll */
function myFunction() {
  var elmnt = document.getElementById("myDIV");
  var x = elmnt.scrollLeft;
  var y = elmnt.scrollTop;
  document.getElementById("demo").innerHTML = "Horizontally: " + x + "px<br>Vertically: " + y + "px";
}

/*let h = $("#navbar").height();
let o = $("#work").offset();
window.scroll(0, o.top-h);*/