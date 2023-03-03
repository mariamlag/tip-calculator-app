

const bill = document.getElementById("bill");
const people_number = document.getElementById("number-of-people");
const tip_Amount = document.getElementById("tip-amount");
const total = document.getElementById("total");
const reset = document.getElementById("reset");
const tips = Array.from(document.querySelectorAll(".tips"));
const custom = document.getElementById("custom-input");
const wrong1 = document.querySelector(".wrong1");
const wrong2 = document.querySelector(".wrong2");


let percentStr;



function changeColor(elem) {
  checkInput();
 
  tips.forEach((el) => {
    el.style.background = "var(--green";
    el.style.color = "white";
  });
  elem.style.background ="var(--cyan)";
  elem.style.color = "var(--green)";  
  percentStr = elem.textContent;
  
  let percent = parseInt(percentStr);
  fullAmount(percent);
};


  custom.addEventListener("input", function () {
    checkInput();
    percentStr = custom.value;
  
    tips.forEach((el) => {el.style.background = "var(--green";
    el.style.color = "white";
    });

    let percent = Number(percentStr);
    fullAmount(percent);
  });


  bill.addEventListener("input", function () {
    checkInput();
    if(Number(bill.value) > 0){
      let percent = parseInt(percentStr);
      fullAmount(percent);
    } 
  });

  people_number.addEventListener("input", function () {
    checkInput();
    if(Number(people_number.value) > 0){
      let percent = parseInt(percentStr);
      fullAmount(percent);
    } 
  });




function fullAmount(percent){

  //gvaigot tipi bill gavamravlot procentze da gavyot xalxis raodenobaze
  let tipAmount = ((bill.value / 100) * percent) / people_number.value;

  //total ari bill gayofili xalxis raodenobaze da mimatebuli tipi
  let totalAmount = (bill.value / people_number.value) + tipAmount;
 

  tip_Amount.textContent = "$" + tipAmount.toFixed(2).toString();
  total.textContent = "$" + totalAmount.toFixed(2).toString();
}

function checkInput() {
  if (Number(people_number.value) === 0) {
    wrong2.style.display = "block";
    people_number.style.border = "2px solid var(--orange)";
  } else if(Number(people_number.value) > 0) {
      wrong2.style.display = "none";
      people_number.style.border = "0px solid";
  }
  if (Number(bill.value) === 0) {
    wrong1.style.display = "block";
    bill.style.border = "2px solid var(--orange)";
  }else if(Number(bill.value) > 0) {
    wrong1.style.display = "none";
    bill.style.border = "0px solid";
}


}
function myReset() {
  location.reload();
};


