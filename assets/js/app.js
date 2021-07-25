var button = document.querySelectorAll(".btn");
var answerBox = document.querySelectorAll(".answer");

for (var i = 0; i < button.length; i++) {

  button[i].addEventListener("click", function () {
    this.querySelector(".rotate").classList.toggle("minus");
    this.parentElement.parentElement.classList.toggle("show");
  });

}