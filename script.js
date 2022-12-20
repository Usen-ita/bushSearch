/**
 * Search feature
 */
let query = document.querySelector(".query");
let searchBtn = document.querySelector(".searchButton");
let x = "how can I survive with ";
let y = " in the forest?";

searchBtn.onclick = function () {
  let url = "https://www.google.co.uk/search?q=" + x + query.value + y;
  window.open(url);
};

/**
 * Custom Cursor
 */
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

/**
 * Tool Selector
 */
const uploadarea = document.querySelector(".query");

uploadarea.addEventListener("drop", (e) => {
  e.preventDefault();
});

const upload = (id) => {
  var toolName = document.getElementById(id).alt;
  
  uploadarea.value = toolName;
};

/**
 * Error prevention tip
 */
let inactivityTime = function () {
  let time;
  window.onload = resetTimer;
  document.onload = resetTimer;
  document.onmousemove = resetTimer;
  document.onmousedown = resetTimer; // touchscreen presses
  document.ontouchstart = resetTimer;
  document.onclick = resetTimer; // touchpad clicks
  document.onkeypress = resetTimer;
  document.addEventListener('scroll', resetTimer, true); // improved; see comments
  function showTip() {
    if(document.getElementById('hint').style.display == 'none'){
      document.getElementById('hint').style.display = 'block';
    }else {
      document.getElementById('hint').style.display = 'none';
    }
  }
  function resetTimer() {
    clearTimeout(time);
    time = setTimeout(showTip, 10000)
  }
};
inactivityTime();
console.log('Please wait...');

/**
 * Display toggle
 */
const body = document.querySelector('body')
const toggle = document.getElementById('toggle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const l3 = document.querySelector('.l3');
const l4 = document.querySelector('.l4');
const queryMode = document.querySelector('.query');
const searchButton = document.querySelector('.searchButton');
const disclaimer = document.querySelector('.disclaimer');
const h2 = document.querySelector('h2');
const hint = document.querySelector('.hint');

var logoTracker = "default";
var helpTracker = "default";
var arrowTracker = "default";


toggle.onclick = function(){
  toggle.classList.toggle('active');
  body.classList.toggle('active');
  l1.classList.toggle('active');
  l2.classList.toggle('active');
  l3.classList.toggle('active');
  l4.classList.toggle('active');
  queryMode.classList.toggle('active');
  searchButton.classList.toggle('active');
  disclaimer.classList.toggle('active');
  h2.classList.toggle('active');
  hint.classList.toggle('active');

  changeLogo();
  
  changeHelpIcon();

  changeArrow();
};

function changeLogo() {
  var logoImage = document.getElementById('logoIcon');
  if(logoTracker == 'default'){
    logoImage.src="../../materials/Icons/Desktop/logoD.png";
    logoTracker='darkmode';

  }else {
    logoImage.src="../../materials/Icons/Desktop/logo.png";
    logoTracker="default";
  }
  
};

function changeHelpIcon() {
  var helpIcon = document.getElementById('helpIcon');
  if(helpTracker == 'default'){
    helpIcon.src="../../materials/Icons/Desktop/HelpD.png";
    helpTracker='darkmode';

  }else {
    helpIcon.src="../../materials/Icons/Desktop/Help.png";
    helpTracker="default";
  }
};

function changeArrow() {
  var arrowIcon = document.getElementById('arrow');
  if(arrowTracker == 'default'){
    arrowIcon.src="../../materials/Icons/Desktop/ArrowD.png";
    arrowTracker='darkmode';

  }else {
    arrowIcon.src="../../materials/Icons/Desktop/Arrow.png";
    arrowTracker="default";
  }
};

/**
 * Signature
 */
function Sign() {
  console.log(
    "%c 🔶 by Usen-ita Asanga 🔶 Student Number: 1921943",
    "color: orange; font-size: 12px"
  );
}
Sign();