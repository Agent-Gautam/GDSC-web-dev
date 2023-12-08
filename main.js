document.querySelectorAll(".review").forEach(review=>{
  review.style.display = "flex";
});
let cards = document.querySelectorAll(".card");
let previous = document.querySelector(".previous");
let next = document.querySelector(".next");
let curcard = 0;
let indicators = document.querySelector(".indicators");
for (let i = 0; i < cards.length; i++) {
  let ind = document.createElement("div");
  ind.className = "indicator";
  indicators.append(ind);
}

let indicator = document.querySelectorAll(".indicator");

function nextcard() {
  cards[curcard].style.opacity = 0;
  indicator[curcard].style.backgroundColor = "grey";
  curcard = curcard == cards.length - 1 ? 0 : curcard + 1;
  cards[curcard].style.opacity = 1;
  indicator[curcard].style.backgroundColor = "black";
}
function previouscard() {
  cards[curcard].style.opacity = 0;
  indicator[curcard].style.backgroundColor = "grey";
  curcard = curcard == 0 ? cards.length - 1 : curcard - 1;
  cards[curcard].style.opacity = 1;
  indicator[curcard].style.backgroundColor = "black";
}

next.addEventListener("click", nextcard);
previous.addEventListener("click", previouscard);
setInterval(function(){nextcard()},2000);

// Navbar
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".toggle_btn");
  const toggleBtnIcon = document.querySelector(".toggle_btn i");
  const dropDownMenu = document.querySelector(".dropdown_menu");
  const navLinks = document.querySelector(".navLinks");

  toggleBtn.addEventListener("click", function () {
    dropDownMenu.classList.toggle("open");
    const isOpen = dropDownMenu.classList.contains("open");

    toggleBtnIcon.classList.toggle("fa-bars", !isOpen);
    toggleBtnIcon.classList.toggle("fa-times", isOpen);

    if (isOpen) {
      navLinks.style.display = "block"; // Show navLinks when dropdown is open
    } else {
      navLinks.style.display = ""; // Reset display property to default
    }
  });
});
// recent blogs
let row = document.querySelector(".row2");
document.querySelector(".morelink").addEventListener("click",function(){
    row.style.transform = "translateY(20rem)";
    document.querySelector(".rows").style.height = "40rem";
})

// transition animation for sec2-card
let sec2cards = document.querySelectorAll(".sec2-card");
let cursec = 0;
setInterval(function(){
    sec2cards[cursec].style.backgroundColor = "transparent";
    cursec = cursec == sec2cards.length - 1 ? 1 : cursec + 1;
    sec2cards[cursec].style.backgroundColor = "rgba(239, 235, 206, 0.5)";
},2000)