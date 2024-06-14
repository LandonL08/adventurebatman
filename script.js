// Declare variables below to save the different divs of your story.
let beginning = document.querySelector(".story-opening")
let rightChoice = document.querySelector(".option-one")
let wrongChoice = document.querySelector(".option-two")
let rightScreen1 = document.querySelector(".option-one-screen")
let rightScreen2 = document.querySelector(".option-one-end")
let wrongScreen1 = document.querySelector(".option-two-screen")
let wrongScreen2 = document.querySelector(".option-two-end")
let redemptionScreen = document.querySelector(".redemption-screen")
let shootScreen = document.querySelector(".shoot-screen")
let jobButton = document.querySelector(".job-button")
let noButton = document.querySelector(".no-button")
let runButton = document.querySelector(".run-button")
let surrenderButton = document.querySelector(".surrender-button")
let shootButton = document.querySelector(".shoot-button")
let hoboScreen = document.querySelector(".hobo-screen")


//  Reconsider life choices handler.
rightChoice.addEventListener('click', function(){
rightScreen1.style.display = "block";
beginning.style.display = "none";
jobButton.style.display = "block";
noButton.style.display = "block";

});
// Commit a crime button handler.
wrongChoice.addEventListener('click', function(){
wrongScreen1.style.display = "block";
beginning.style.display = "none";

});
// Run button handler.
runButton.addEventListener('click', function(){
wrongScreen2.style.display = "block";
wrongScreen1.style.display = "none";

});
// Surrender button handler. 
surrenderButton.addEventListener('click', function(){
redemptionScreen.style.display = "block";
wrongScreen1.style.display = "none";
});
// Shoot button handler.
shootButton.addEventListener('click', function () {
shootScreen.style.display = "block";
wrongScreen1.style.display = "none";
});
// Get a job handler.
jobButton.addEventListener('click', function(){
rightScreen2.style.display = "block";
rightScreen1.style.display = "none";
});
// Too lazy handler.
noButton.addEventListener('click', function(){
hoboScreen.style.display = "block";
rightScreen1.style.display = "none";

});
