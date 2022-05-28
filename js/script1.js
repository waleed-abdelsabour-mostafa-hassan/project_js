let numChaild = 1,
  numRoom = 1,
  numAdult = 1,
  dateIn,
  dateOut,
  numDays = 1,
  locationP,
  priceLocation,
  totalPriceLocaSt,
  totalPrice = 0;

function personnumON() {
  document.getElementsByClassName("container-numberPR")[0].style.display =
    "flex";
}
function personnumOUT() {
  document.getElementsByClassName("container-numberPR")[0].style.display =
    "none";
}

var email = localStorage.getItem("email");

document.getElementsByClassName("btn3-email")[0].value = "Hello " + email;

function printNUM() {
  document.getElementsByClassName("personNum-btn")[0].innerHTML =
    numAdult + " Adult . " + numChaild + " Chaild . " + numRoom + " Room ";
}
function plusForAdult() {
  numAdult++;
  document.getElementsByClassName("textAdult")[0].innerHTML = numAdult;
  printNUM();
}
function minusForAdult() {
  numAdult--;
  if (numAdult < 1) {
    numAdult = 1;
  } else {
    document.getElementsByClassName("textAdult")[0].innerHTML = numAdult;
    printNUM();
  }
}
///////////////////////////////////////////////////////////////////
function plusForChaild() {
  numChaild++;
  document.getElementsByClassName("textChaild")[0].innerHTML = numChaild;
  printNUM();
}
function minusForChaild() {
  numChaild--;
  if (numChaild < 0) {
    numChaild = 0;
  } else {
    document.getElementsByClassName("textChaild")[0].innerHTML = numChaild;
    printNUM();
  }
}
///////////////////////////////////////////////////////////////////
function plusForRoom() {
  numRoom++;
  document.getElementsByClassName("textRoom")[0].innerHTML = numRoom;
  printNUM();
}
function minusForRoom() {
  numRoom--;
  if (numRoom < 1) {
    numRoom = 1;
  } else {
    document.getElementsByClassName("textRoom")[0].innerHTML = numRoom;
    printNUM();
  }
}
function showGovernment() {
  document.getElementsByClassName("dropdown-content")[0].style.display =
    "block";
}
function hideGovernment() {
  document.getElementsByClassName("dropdown-content")[0].style.display = "none";
}

function getGvernment(value) {
  locationP = value.innerText;
  document.getElementsByClassName("dropbtn")[0].innerText = locationP;

  switch (locationP) {
    case "Hurghada":
      console.log(1);
      priceLocation = 100;
      break;
    case "Alexandria":
      console.log(2);
      priceLocation = 85;

      break;
    case "Dahab":
      console.log(3);
      priceLocation = 110;

      break;
    case "Sharm El-Shaikh":
      priceLocation = 90;

      break;
    case "Ain Sokhna":
      priceLocation = 95;

      break;
    case "Cairo":
      console.log(88);

      break;
  }
}
function calcPrice() {
  dIn = document.getElementsByClassName("date")[0].value;
  dOut = document.getElementsByClassName("date")[1].value;
  dateIn = new Date(dIn);
  dateOut = new Date(dOut);
  var Difference_In_Time = dateIn.getTime() - dateOut.getTime();
  numDays = Difference_In_Time / (1000 * 3600 * 24);
  console.log(numDays);

  totalPrice = Math.floor(
    eval(
      ((numAdult + numChaild * 0.6) * priceLocation +
        (numRoom - 1) * priceLocation) *
        numDays
    )
  );
  localStorage.setItem("totalPrice", totalPrice);
  localStorage.setItem("adult", numAdult);
  localStorage.setItem("chaild", numChaild);
  localStorage.setItem("room", numRoom);
  localStorage.setItem("days", numDays);
}

function onSearch() {
  calcPrice();
  window.location.href = "Page3.html";
}
function onSearchPage3() {
  calcPrice();
  document.getElementById("hot1").innerText = "EGY " + totalPrice;
  document.getElementById("hot2").innerText = "EGY " + totalPrice * 0.9;
  document.getElementById("hot3").innerText = "EGY " + totalPrice * 0.88;
  document.getElementById("hot4").innerText = "EGY " + totalPrice * 0.875;
  document.getElementById("hot5").innerText = "EGY " + totalPrice * 0.87;
  document.getElementById("hot6").innerText = "EGY " + totalPrice * 0.85;
  document.getElementById("decriptionPrice").innerHTML =
    "Our prices for " +
    numAdult +
    " adult , " +
    numChaild +
    " chaild , " +
    numRoom +
    " room and " +
    numDays +
    " day ";
}
function ClickSignOut() {
  localStorage.clear();
  window.location.href = "signIN.html";
}

///*.//////////////////////////////
