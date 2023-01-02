/**
 * Search feature
 */
let query = document.querySelector(".query");
let searchBtn = document.querySelector(".searchButton");
let x = "how can I survive with ";
let y = " in the forest?";

searchBtn.onclick = function () {
  if (query.value.length == 0) {
    //do nothing
  } else {
    let url = "https://www.google.co.uk/search?q=" + x + query.value + y;
    window.open(url);
    // window.open(url, "_self");
  }
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
  document.addEventListener("scroll", resetTimer, true); // improved; see comments
  function showTip() {
    if (document.getElementById("hint").style.display == "none") {
      document.getElementById("hint").style.display = "block";
    } else {
      document.getElementById("hint").style.display = "none";
    }
  }
  function resetTimer() {
    clearTimeout(time);
    time = setTimeout(showTip, 60000);
  }
};
inactivityTime();

/**
 * Display toggle
 */
const body = document.querySelector("body");
const toggle = document.getElementById("toggle");
const l1 = document.querySelector(".l1");
const l2 = document.querySelector(".l2");
const l3 = document.querySelector(".l3");
const l4 = document.querySelector(".l4");
const queryMode = document.querySelector(".query");
const searchButton = document.querySelector(".searchButton");
const disclaimer = document.querySelector(".disclaimer");
const h2 = document.querySelector("h2");
const hint = document.querySelector(".hint");
const overview = document.querySelector(".modal-content");
const overviewClose = document.querySelector(".close");

var logoTracker = "default";
var helpTracker = "default";
var arrowTracker = "default";

toggle.onclick = function () {
  toggle.classList.toggle("active");
  body.classList.toggle("active");
  l1.classList.toggle("active");
  l2.classList.toggle("active");
  l3.classList.toggle("active");
  l4.classList.toggle("active");
  queryMode.classList.toggle("active");
  searchButton.classList.toggle("active");
  disclaimer.classList.toggle("active");
  h2.classList.toggle("active");
  hint.classList.toggle("active");
  overview.classList.toggle("active");
  overviewClose.classList.toggle("active");

  changeLogo();

  changeHelpIcon();

  changeArrow();
};

function changeLogo() {
  var logoImage = document.getElementById("logoIcon");
  if (logoTracker == "default") {
    logoImage.src = "../../materials/Icons/Desktop/logoD.png";
    logoTracker = "darkmode";
  } else {
    logoImage.src = "../../materials/Icons/Desktop/logo.png";
    logoTracker = "default";
  }
}

function changeHelpIcon() {
  var helpIcon = document.getElementById("helpIcon");
  if (helpTracker == "default") {
    helpIcon.src = "../../materials/Icons/Desktop/HelpD.png";
    helpTracker = "darkmode";
  } else {
    helpIcon.src = "../../materials/Icons/Desktop/Help.png";
    helpTracker = "default";
  }
}

function changeArrow() {
  var arrowIcon = document.getElementById("arrow");
  if (arrowTracker == "default") {
    arrowIcon.src = "../../materials/Icons/Desktop/ArrowD.png";
    arrowTracker = "darkmode";
  } else {
    arrowIcon.src = "../../materials/Icons/Desktop/Arrow.png";
    arrowTracker = "default";
  }
}

/**
 * System instructions and project summary
 */
// Get the modal
var modal = document.getElementById("overview");

// Get the button that opens the modal
var btn = document.getElementById("helpIcon");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/**
 * System instructions and project summary
 */
function endIntro() {
  document.getElementById("introCover").style.display = "none";
  

  //Aesthetic animations
  anime({
    targets: [".list-item"], //['.l1', '.l2','.textInput', '.l3', '.l4'],
    keyframes: [{ translateX: 27 }],
    duration: 8000,
    delay: anime.stagger(50, { easing: "easeInQuad" }),
  });

  anime({
    targets: [".l1", ".l2", ".l3", ".l4"],
    keyframes: [{ translateX: -27 }, { translateX: 0 }],
    duration: 3000,
    delay: anime.stagger(150, { easing: "easeOutQuint" }),
    // easing: 'easeOutQuint'
  });
}

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

/**
 * Into Aesthetic animations
 */
anime({
  targets: ".introText",
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  duration: 5000,
});

anime({
  targets: ".introText2",
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  delay: 4000,
  duration: 20000,
});
anime({
  targets: ".enteranceBtn",
  keyframes: [{ opacity: 1 }],
  delay: 16000,
  duration: 1000,
});
