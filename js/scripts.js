var box1 = document.getElementById("box-1");
var box2 = document.getElementById("box-2");
var box3 = document.getElementById("box-3");
var box4 = document.getElementById("box-4");
var box5 = document.getElementById("box-5");
var boxStyle = document.getElementsByClassName("second.services-icon");
var content1 = document.getElementById("content-1");
var content2 = document.getElementById("content-2");
var content3 = document.getElementById("content-3");
var content4 = document.getElementById("content-4");
var content5 = document.getElementById("content-5");
var mobileNav = document.getElementsByClassName("toggler");
var mobileHam = document.getElementsByClassName("mobile-toggler");

box1.addEventListener("click", function() {
  if ((content1.style.display = "none")) {
    content1.style.display = "flex";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
  } else {
    content1.style.display = "none";
  }
});

box2.addEventListener("click", function() {
  if ((content2.style.display = "none")) {
    content1.style.display = "none";
    content2.style.display = "flex";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
  } else {
    content1.style.display = "none";
  }
});
box3.addEventListener("click", function() {
  if ((content3.style.display = "none")) {
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "flex";
    content4.style.display = "none";
    content5.style.display = "none";
  } else {
    content1.style.display = "none";
  }
});
box4.addEventListener("click", function() {
  if ((content4.style.display = "none")) {
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "flex";
    content5.style.display = "none";
  } else {
    content1.style.display = "none";
  }
});
box5.addEventListener("click", function() {
  if ((content5.style.display = "none")) {
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "flex";
  } else {
    content1.style.display = "none";
  }
});

const mobileNavigation = () => {
  var x = document.querySelectorAll(".toggler");
  var w = window.innerWidth;
  for (list of x) {
    if (list.style.display === "none") {
      list.style.display = "block";
    } else {
      list.style.display = "none";
    }
  }
};

window.addEventListener("resize", () => {
  var w = window.innerWidth;
  var x = document.querySelectorAll(".toggler");
  for (list of x) {
    if (w > 900) {
      list.style.display = "block";
    } else if (w < 900) {
      list.style.display = "none";
    }
  }
});

function openTab(blog) {
  var i;
  var x = document.getElementsByClassName("blog-identifier");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(blog).style.display = "block";
}

document.getElementById("btt");
const footerBTN = document.getElementById("btt");

footerBTN.addEventListener("click", () =>
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
);

var navigation = document.querySelector("nav");

window.addEventListener("scroll", () => {
  y = window.scrollY;
  if (y >= 200) {
    navigation.classList.add("nav-scroll");
  } else if (y < 199) {
    navigation.classList.remove("nav-scroll");
  }
});
