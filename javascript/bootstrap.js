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

//Dark Mode

const body = document.querySelector('body');
const sections = document.querySelectorAll('main, footer, header');
const anchors = document.querySelector('nav')

const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');

function toggleMode() {
  body.classList.toggle('dark-mode');
  sections.forEach((sections)=>{
    sections.classList.toggle('bItem2');
  });
  anchors.classList.toggle('h2a');

  const modeMessage = body.classList.contains('dark-mode') ?
      'Dark'
      : "Light";
  modeStatus.innerText = modeMessage;
}
modeToggle.addEventListener('click', toggleMode);
