let navBar = document.querySelector(".js-links");
let menuIcon = document.querySelector(".js-menu");
let links = document.querySelectorAll(".link-item");

function toggle() {
  if (navBar.classList.contains("open")) {
    navBar.classList.remove("open");
  } else {
    navBar.classList.add("open");
  }
}

links.forEach(function (link) {
  link.onclick = function () {
    navBar.classList.remove("open");
  };
});

menuIcon.onclick = function (e) {
  e.stopPropagation();
  toggle();
};

navBar.onclick = function (e) {
  e.stopPropagation();
};

document.body.onclick = function () {
  navBar.classList.remove("open");
};
