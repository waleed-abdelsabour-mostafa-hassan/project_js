$(".rating").on("click", ".ratings_stars", function () {
  var star = $(this);
  star.addClass("selected");
  star.prevAll().addClass("selected");
  star.nextAll().removeClass("selected");
  $("#rating").val(star.data("rating"));
});
var email = localStorage.getItem("email");
document.getElementById("btn3-email2").value = "Hello " + email;
totalPriceLocaSt = localStorage.getItem("totalPrice");
document.getElementById("hot1").innerText = "EGY " + totalPriceLocaSt;
document.getElementById("hot2").innerText = "EGY " + totalPriceLocaSt * 0.9;
document.getElementById("hot3").innerText = "EGY " + totalPriceLocaSt * 0.88;
document.getElementById("hot4").innerText = "EGY " + totalPriceLocaSt * 0.875;
document.getElementById("hot5").innerText = "EGY " + totalPriceLocaSt * 0.87;
document.getElementById("hot6").innerText = "EGY " + totalPriceLocaSt * 0.85;

let adultLS = localStorage.getItem("adult");
let chaildLS = localStorage.getItem("chaild");
let roomLS = localStorage.getItem("room");
let daysLS = localStorage.getItem("days");
document.getElementById("decriptionPrice").innerHTML =
  "Our prices for " +
  adultLS +
  " adult , " +
  chaildLS +
  " chaild , " +
  roomLS +
  " room and " +
  daysLS +
  " day ";
