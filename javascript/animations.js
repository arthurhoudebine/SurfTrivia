function slideUp(el) {
    var elem = document.getElementById(el);
    //elem.style.transition = "all 1s ease-out";
    elem.style.height = "500px";
  }
  function slideDown(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "all 2s ease-in";
    elem.style.height = "0px";
  }


  //fonction pour connaitre le timing de la vidéo et slide up la question
$('button').click(function() {
    console.log(YTplayer.getCurrentTime())
    var questionID = document.getElementById(questionId);
    slideUp('questionId');
  })

  //fonction qui lance le timer
function lancerTimer(){
  var countdownNumberEl = document.getElementById('countdown-number');
  var countdown = 10;
  
  countdownNumberEl.textContent = countdown;
  
  setInterval(function() {
    countdown = --countdown <= 0 ? 10 : countdown;
  
    countdownNumberEl.textContent = countdown;
  }, 1000);
  }
  




