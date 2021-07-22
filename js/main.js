

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
  item.addEventListener("focusout", function () {
    this.classList.toggle("collapsible--expanded");
  })
}
);


window.onscroll = function() {myFunction()};

var header = document.getElementById("scroll-sticky-id");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("scroll-sticky");
  } else {
    header.classList.remove("scroll-sticky");
  }
}
