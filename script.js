//sliding images1
var slides = document.querySelectorAll(".slide");

console.log(slides.length);

var repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;
  var repeater = function () {
    setTimeout(function () {
      [...active].forEach(function (activeSlide) {
        activeSlide.classList.remove("active");
      });
      slides[i].classList.add("active");
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 4000);
  };
  repeater();
};
repeat();

//sliding images2
var slides1 = document.querySelectorAll(".slide1");

console.log(slides1.length);

var repeat = function (activeClass1) {
  let active1 = document.getElementsByClassName("active1");
  let i = 1;
  var repeater = function () {
    setTimeout(function () {
      [...active1].forEach(function (activeSlide) {
        activeSlide.classList.remove("active1");
      });
      slides1[i].classList.add("active1");
      i++;

      if (slides1.length == i) {
        i = 0;
      }
      if (i >= slides1.length) {
        return;
      }
      repeater();
    }, 6000);
  };
  repeater();
};
repeat();

//reveal
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  reveals.forEach((reveal) => {
    var windowHeight = window.innerHeight;
    var revealTop = reveal.getBoundingClientRect().top;
    var revealPoint = 20;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add("active2");
    } else {
      reveal.classList.remove("active2");
    }
  });
}
