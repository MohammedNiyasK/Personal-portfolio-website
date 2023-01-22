// Header background change

function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove(scroll-header);
}
window.addEventListener("scroll", scrollHeader);

//================= SERVICES MODEL=========

var modal = document.querySelectorAll(".services-model");
var btn = document.querySelectorAll(".services-button");
var close = document.querySelectorAll(".services_model-close");

let modaladd = function (modalClick) {
  modal[modalClick].classList.add("active-modal");
};

btn.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modaladd(i);
  });
});
close.forEach((mc) => {
  mc.addEventListener("click", () => {
    modal.forEach((m) => {
      m.classList.remove("active-modal");
    });
  });
});

//========== SCROLL SECTION ACTIVE============//

let section = document.querySelectorAll(".section");

let lists = document.querySelectorAll(".nav-item");
function activeLink(li) {
  lists.forEach((item) => item.classList.remove("active-link"));
  li.classList.add("active-link");
}
lists.forEach((item) =>
  item.addEventListener("click", function () {
    activeLink(this);
  })
);

window.onscroll = () => {
  section.forEach((section) => {
    let top = window.scrollY;

    let offset = section.offsetTop-58;

    let height = section.offsetHeight;
    let id = section.getAttribute("id");
    let target = document.querySelector(`[href='#${id}']`).parentElement;
    if (top >= offset && top < offset + height) {

target.classList.add('active-link')

}else{

  target.classList.remove('active-link')
      //activeLink(target);
    }
  });
};

// Light Dark Theme //
function myFunction() {
  var element = document.body
  element.classList.toggle("light-theme");
  console.log(element)
}

//  Scroll reveal Animation
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});
sr.reveal(".home-data");
sr.reveal(".image-handler", { delay: 700 });
sr.reveal(".home-social,.home-scroll", { delay: 900, origin: "bottom" });
