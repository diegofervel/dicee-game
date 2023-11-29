
let imageNumber1 = Math.floor(Math.random()*6+1);

let imageNumber2 = Math.floor(Math.random()*6+1);

document.querySelector(".img1").setAttribute("src", "images/dice"+imageNumber1+".png");

document.querySelector(".img2").setAttribute("src", "images/dice"+imageNumber2+".png");

if (imageNumber1 > imageNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
}
else if (imageNumber2 > imageNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}
