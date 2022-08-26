/* Numero */

let newLabel = document.createElement("label");
newLabel.className = "displayCounter";
newLabel.innerHTML = "0";
newLabel.style.fontSize = "4rem";
newLabel.style.color = "white";

let divNum = document.getElementById("num");
divNum.appendChild(newLabel);

/* Bottoni base (Addizione e sottrazione) */

let btnPlus = document.createElement("button");
btnPlus.innerHTML = "+";
btnPlus.className = "increasePlusButton";

let btnMin = document.createElement("button");
btnMin.innerHTML = "-";
btnMin.className = "decreaseMinButton";

let divBasic = document.getElementById("basic");
divBasic.appendChild(btnMin);
divBasic.appendChild(btnPlus);

let count = 0;

btnPlus.onclick = function(){
  count+=1;
  newLabel.innerHTML = count;
}

btnMin.onclick = function(){
  count-=1;
  newLabel.innerHTML = count;
}
