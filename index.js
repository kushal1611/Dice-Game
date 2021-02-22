var random1 = Math.ceil(Math.random() * 6);
var random2 = Math.ceil(Math.random() * 6);


var img1Source = "images/dice" + random1 + ".png"; //(images/dice1.png-dice/6.png)
document.getElementsByTagName("img")[0].setAttribute("src", img1Source);

var img2Source = "images/dice" + random2 + ".png";
document.getElementsByTagName("img")[1].setAttribute("src", img2Source);

if (random1 > random2)
  document.querySelector("h1").innerHTML = "<span class='fas fa-trophy'></span> Player 1 wins!";
else if (random1 < random2)
  document.querySelector("h1").innerHTML = "Player 2 wins! <span class='fas fa-trophy'></span>";
else
  document.querySelector("h1").innerHTML = "Draw!";
