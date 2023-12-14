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
  var reveals1 = document.querySelectorAll(".reveal1");
  var reveals2 = document.querySelectorAll(".reveal2");

  //reveal up
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
  //reveal from left
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

  //reveal from right
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

//changing quotes
document.addEventListener("DOMContentLoaded", function () {
  // Array of text values to cycle through
  const textArray1 = [
    '"At bottom every man knows well enough that he is a unique being, only once on this earth; and by no extraordinary chance will such a marvelously picturesque piece of diversity in unity as he is, ever be put together a second time."',
    '"We are survival machines - robot vehicles blindly programmed to preserve the selfish molecules known as genes. This is a truth which still fills me with astonishment."',
    '"You genetics load the gun, your lifestyle pulls the trigger."',
    '"Genetic engineering is a result of science advancement, so I don nott think that in itself is bad. If used wisely, genetics can be beneficial, but they can be abused, too."',
    '"I suspect any worries about genetic engineering may be unnecessary. Genetic mutations have always happened naturally, anyway."',
  ];
  const textArray2 = [
    "―Friedrich Nietzsche",
    "―Richard Dawkins",
    "―Mehmet Oz",
    "―Hideo Kojima",
    "―James Lovelock",
  ];

  // Get h1
  const changingText = document.getElementById("changingText");
  const changingText1 = document.getElementById("changingText1");

  // Function to change text at intervals
  function changeText() {
    let currentIndex = 0;

    setInterval(() => {
      changingText.textContent = textArray1[currentIndex];
      changingText1.textContent = textArray2[currentIndex];
      currentIndex = (currentIndex + 1) % textArray1.length;
    }, 10000);
  }

  changeText();
});

// Function to open the modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
  document.getElementById("overlay").style.display = "block";
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

  // Set a timeout to call a function after 5 seconds
  setTimeout(function () {
    // Call your additional function here
    yourAdditionalFunction();
  }, 3000); // 5000 milliseconds = 5 seconds
});

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
