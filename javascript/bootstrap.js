//Dark Mode

const modeToggle = document.getElementById('mode-toggle');
const body = document.querySelector('body');
const sections = document.querySelectorAll('header, main, footer, div.accordion-body');
const anchors = document.querySelector('nav')
const modeStatus = document.querySelector('.mode-status');
let darkMode = localStorage.getItem("dark-mode");
const modeMessage = body.classList.contains('dark-mode-colors') ?
'Dark'
: "Light";

const enableDarkMode = () => {
  body.classList.add("dark-mode-colors");
  sections.forEach((sections)=>{
    sections.classList.add('bItem2');
  });
  localStorage.setItem("dark-mode", "enabled");
  const modeMessage = body.classList.contains('dark-mode-colors') ?
  'Dark'
  : "Light";
  modeStatus.innerText = modeMessage;
};

const disableDarkMode = () => {
  body.classList.remove("dark-mode-colors");
  sections.forEach((sections)=>{
    sections.classList.remove('bItem2');
  });
  localStorage.setItem("dark-mode", "disabled");
  const modeMessage = body.classList.contains('dark-mode-colors') ?
  'Dark'
  : "Light";
  modeStatus.innerText = modeMessage;
};

if (darkMode === "enabled") { //check load value
  enableDarkMode();
  localStorage.getItem('itemClicked', 'true');
  if ('itemClicked', 'true') {
    document.getElementById("mode-toggle").checked = true;
  }
}

modeToggle.addEventListener("click", (e) => { 
  darkMode = localStorage.getItem("dark-mode");
  if (darkMode === "disabled") {
    enableDarkMode();
    localStorage.setItem('itemClicked', 'true');
  } else {
    disableDarkMode();
    localStorage.setItem('itemClicked', 'false');
  }
  const modeMessage = body.classList.contains('dark-mode-colors') ?
  'Dark'
  : "Light";
  modeStatus.innerText = modeMessage;
});


//About Me Image Slider

const images = document.querySelectorAll('#slider img');
let currentIndex = 0;
function reset() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }
}
function initializeSlider() {
  reset();
  images[currentIndex].classList.add('active');
}

function slideLeft() {
  reset();
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  images[currentIndex].classList.add('active');
}
function slideRight() {
  reset();
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  images[currentIndex].classList.add('active');
}
initializeSlider();
document.querySelector('#prev').addEventListener('click', function() {
  slideLeft();
});
document.querySelector('#next').addEventListener('click', function() {
  slideRight();
});
