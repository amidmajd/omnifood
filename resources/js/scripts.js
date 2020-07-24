AOS.init({ duration: 900 });

window.addEventListener("scroll", menuScroll);
var navbar = document.getElementById("header").getElementsByTagName("nav")[0];
var mainNav = document.getElementsByClassName("main-nav")[0];

function menuScroll() {
  var yPos = window.pageYOffset;

  if (!navbar.classList.contains("sticky") && yPos > 521) {
    navbar.classList.add("sticky");
  } else if (yPos < 521) {
    navbar.classList.remove("sticky");
  }
}

document.getElementsByClassName("mobile-nav-icon")[0].addEventListener("click", function () {
  if (mainNav.style.display == "none" || mainNav.style.display == "") {
    mainNav.style.display = "flex";
    this.getElementsByTagName("i")[0].classList.remove("fa-bars");
    this.getElementsByTagName("i")[0].classList.add("fa-times");
  } else {
    mainNav.style.display = "none";
    this.getElementsByTagName("i")[0].classList.remove("fa-times");
    this.getElementsByTagName("i")[0].classList.add("fa-bars");
  }
});
