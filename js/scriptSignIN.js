let email, testEmail, pass1, testPass1, pass2, testPass2;
function clickEmailForm() {
  email = document.getElementById("inpEm").value;
  let pt1 = /^([a-zA-Z0-9_\.-]+)@([a-zA-Z0-9_\.-]+)\.(com|net|edu|org)$/;
  testEmail = pt1.test(email);
  console.log(testEmail);
  if (testEmail) {
    document.getElementsByClassName("sec1")[0].classList.add("sec1-pass");
    document.getElementById("password-container").classList.add("pass-trans");
    document.getElementById("conf").classList.add("pass-trans");
    document.getElementsByClassName("all-pass")[0].classList.add("pass-trans");

    document.getElementById("container-formIN").classList.add("trns");
    document.getElementById("all").classList.add("trns");
    document.getElementsByClassName("sec2")[0].style.height = "32%";
  } else {
    document.getElementById("inpEm").style.border = "rgb(255 0 0) 2px solid";
    alert("Make sure the email address you entered is correct.");
  }
}
function cahngeStyle(e) {
  e.style.border = "2px solid rgba(22, 0, 187, 0.807)";
}

function cahngeStyleOutEmail() {
  this.style.border = "1px solid rgba(56, 56, 56, 0.538)";
}
function cahngeStyleOutPass1() {
  this.style.border = "1px solid rgba(56, 56, 56, 0.538)";
  pass1 = this.value;
  let pt1 = /^[a-zA-z0-9-@]{6,}$/;
  testPass1 = pt1.test(pass1);
  if (!testPass1) {
    this.style.border = "rgb(255 0 0) 2px solid";
    document.getElementById("conf").style.color = "rgb(255 0 0)";
  } else {
    document.getElementById("conf").style.color = "rgb(0 0 0)";
  }
}

function cahngeStyleOutPass2() {
  this.style.border = "1px solid rgba(56, 56, 56, 0.538)";
  pass2 = this.value;
  if (pass1 !== pass2) {
    alert("The passwords you entered didn't match – try again");
    this.style.border = "rgb(255 0 0) 2px solid";
  }
}

document
  .getElementById("inpEm")
  .addEventListener("focusout", cahngeStyleOutEmail);
document
  .getElementById("inpPas1")
  .addEventListener("focusout", cahngeStyleOutPass1);
document
  .getElementById("inpPas2")
  .addEventListener("focusout", cahngeStyleOutPass2);

function clickCreateForm() {
  localStorage.setItem("email", email);
}
