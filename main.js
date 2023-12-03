let cards = document.querySelectorAll(".card");
let previous = document.querySelector(".previous");
let next = document.querySelector(".next");
let curcard = 0;
let indicators = document.querySelector(".indicators");
for(let i = 0; i < cards.length; i++){
    let ind = document.createElement("div");
    ind.className = "indicator";
    indicators.append(ind);
}

let indicator = document.querySelectorAll(".indicator");
function nextcard(){
    cards[curcard].style.display = "none";
    indicator[curcard].style.backgroundColor = "grey";
    curcard = curcard == cards.length-1? 0: curcard+1;
    cards[curcard].style.display = "block";
    indicator[curcard].style.backgroundColor = "black";
}
function previouscard(){
    cards[curcard].style.display = "none";
    indicator[curcard].style.backgroundColor = "grey";
    curcard = curcard == 0? cards.length-1: curcard-1;
    cards[curcard].style.display = "block";
    indicator[curcard].style.backgroundColor = "black";

}

next.addEventListener("click",nextcard);
previous.addEventListener("click",previouscard);