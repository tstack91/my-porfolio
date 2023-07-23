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


//Form Submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);

  function submitForm(e){
    e.preventDefault();
      
    //Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('msg');


  }

  //Form value
  function getInputVal(id){
    return document.getElementById(id).value;
  }  