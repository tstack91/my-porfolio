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


const form = document.getElementById('contactForm');
const alert = document.querySelector(".alert");

const firebaseConfig = {
  apiKey: "AIzaSyDYEFKE01fDkbrFlt0xIfje17Jic1W0YZ4",
  authDomain: "portfolio-database-ae80b.firebaseapp.com",
  databaseURL: "https://portfolio-database-ae80b-default-rtdb.firebaseio.com",
  projectId: "portfolio-database-ae80b",
  storageBucket: "portfolio-database-ae80b.appspot.com",
  messagingSenderId: "899617300561",
  appId: "1:899617300561:web:7dc05044ede125474f1870",
  measurementId: "G-SSDCY99W4G"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  
  const database = firebase.database()

  const ref = database.ref("messages")


form.addEventListener("submit",(e)=>{
    
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('msg').value;
    
    ref.push({
        name:name,
        email:email,
        phone: phone,
        message:message
    })

    alert.style.display="block"

    setTimeout(()=>{
        alert.style.display="none"
    },3000)

    form.reset()

})




//Sort Function//

function oddEvenSort() {
  let input = document.getElementById("sorter").value;
  let range = input.split(",").map(str => parseInt(str.trim()));
  let start = Math.min(...range);
  let end = Math.max(...range);
  let length = end - start + 1;
  let arr = [];
  // Here I am going to populate the array with values from start to end
  for (let i = 0; i < length; i++) {
    arr.push(start + i);
  }
  // Now lets apply bubble sort to separate odds and evens
  let n = arr.length;
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < n - 1; i++) {
      if (i % 2 === 0 && arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSorted = false;
      }
    }
  }
  // Display the sorted array with desired order
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      resultArr.push(arr[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      resultArr.push(arr[i]);
    }
  }
  document.getElementById("display").textContent = resultArr.join(", ");
}
