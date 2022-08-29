function displayCounter(){ 

  let number = document.createElement("label");
  number.className = "start-number"; // naming-conv per una classe HTML
  number.innerHTML = "0";

    let divNumber = document.getElementById("number-container");
    divNumber.appendChild(number);

  let buttonPlus = document.createElement("button");
  buttonPlus.className = "increase-button";
  buttonPlus.innerHTML = "+";

  let buttonMinus = document.createElement("button");
  buttonMinus.className = "decrease-button";
  buttonMinus.innerHTML = "-";

    let divButtons = document.getElementById("buttons-container");
    divButtons.appendChild(buttonMinus);
    divButtons.appendChild(buttonPlus);


  const INNER_FUNCTION = initiateCounter();

  function initiateCounter(){
    
    let count = 0;

    document.getElementById("buttons-container").addEventListener("click", event => {
      if (event.target.className === "increase-button") {
        count += 1;
        number.innerHTML = count;
      }

      if (event.target.className === "decrease-button") {
        count -= 1;
        number.innerHTML = count;
      }
    })

  };

}

displayCounter();
