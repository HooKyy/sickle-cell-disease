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

// Function to close the modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

// Event listener to trigger the modal when the page loads
window.addEventListener("load", function () {
  // Function to close modal
  closeModal();

  // Function to change body style
  changeBodyStyle();
});

// Set a timeout to call a function after 5 seconds
setTimeout(function () {
  // Call your additional function here
  yourAdditionalFunction();
}, 5000); // 5000 milliseconds = 5 seconds

function yourAdditionalFunction() {
  // Your additional function code goes here
  closeModal();
  changeBodyStyle();
}

function changeBodyStyle() {
  // Access the body element
  var body = document.body;

  // Edit the style properties dynamically
  body.style.overflow = "visible";
}

// JavaScript to add a click event to the iframe
document.getElementById("myIframe").addEventListener("click", function () {
  // Get the iframe element
  var iframe = document.getElementById("myIframe");

  // Get the src attribute of the iframe
  var src = iframe.src;

  // Navigate to the src page
  window.location.href = src;
});
