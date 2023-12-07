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
  cards[curcard].style.display = "none";
  indicator[curcard].style.backgroundColor = "grey";
  curcard = curcard == cards.length - 1 ? 0 : curcard + 1;
  cards[curcard].style.display = "block";
  indicator[curcard].style.backgroundColor = "black";
}
function previouscard() {
  cards[curcard].style.display = "none";
  indicator[curcard].style.backgroundColor = "grey";
  curcard = curcard == 0 ? cards.length - 1 : curcard - 1;
  cards[curcard].style.display = "block";
  indicator[curcard].style.backgroundColor = "black";
}

next.addEventListener("click", nextcard);
previous.addEventListener("click", previouscard);

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
    row.style.display = "flex";
})