<!-- validateEmail -->
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

<!-- Change Hackathons background -->
function changeHackathonsBackground(){
  document.getElementById("aboutGeorge").style.background = 'url(assets/montrealAtNight.jpg)';
  document.getElementById("aboutGeorge").style.backgroundSize = "100%"
  document.getElementById("aboutGeorge").style.backgroundRepeat = 'fixed'
}

<!-- Change Welcome background -->
function changeWelcomeBackground(){
  document.getElementById("aboutGeorge").style.background = 'white';
  document.getElementById("aboutGeorge").style.backgroundSize = "100%"
  document.getElementById("aboutGeorge").style.backgroundRepeat = 'fixed'
}
