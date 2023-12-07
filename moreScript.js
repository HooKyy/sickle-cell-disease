document.addEventListener("DOMContentLoaded", function () {
  var header = document.getElementById("main-header");
  var title1 = document.getElementById("title1");

  var section = document.getElementById("section1"); // Adjust based on the section you want the header to reveal

  window.addEventListener("scroll", function () {
    var sectionPosition = section.getBoundingClientRect().top;

    if (sectionPosition < 0) {
      header.classList.remove("hidden");
      title1.classList.remove("hidden1");
    } else {
      header.classList.add("hidden");
      title1.classList.add("hidden1");
    }
  });
});

//reveal
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals1 = document.querySelectorAll(".reveal1");
  var reveals2 = document.querySelectorAll(".reveal2");

  reveals1.forEach((reveal) => {
    var windowHeight = window.innerHeight;
    var revealTop = reveal.getBoundingClientRect().top;
    var revealPoint = 20;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add("active2");
    } else {
      reveal.classList.remove("active2");
    }
  });

  reveals2.forEach((reveal) => {
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
