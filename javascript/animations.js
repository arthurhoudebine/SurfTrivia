  //fonction pour faire apparaitre/disparaitre les questions
function slideUp(el) {
    var elem = document.getElementById(el);
    //elem.style.transition = "all 1s ease-out";
    elem.style.height = "500px";
  }
  function slideDown(el) {
  var elem = document.getElementById(el);
  //  elem.style.transition = "all 2s ease-in";
  elem.style.height = "0px";


  }


  //fonction pour connaitre le timing de la vidéo et slide up la question
$('button').click(function() {
    console.log(YTplayer.getCurrentTime())
    var questionID = document.getElementById(questionId);
    slideUp('questionId');
  })

  var countdownInt;
  //fonction qui lance le timer
function lancerTimeQuestion(){
  var countdownNumberEl = document.getElementById('countdown-number');
  var countdown = 3;
  
  countdownNumberEl.textContent = countdown;
  
  countdownInt = setInterval(function() {
    countdown--;
    console.log("countdown="+countdown);
    countdownNumberEl.textContent = countdown;
    if (countdown === 0) {
    clearInterval(countdownInt);
    $('#question').html('BE QUICKER! Time has elapsed!');
    $('#question').css("color","#ff6666");
    $('#svgcircle').css("stroke","#ff6666");
    $('#buttonOne').prop("disabled",true);
    $('#buttonTwo').prop("disabled",true);
    $('#buttonThree').prop("disabled",true);
    $('#buttonFour').prop("disabled",true);
    setTimeout(function(){slideDown('questionId');},3000);
    }
  
  }, 1000);
  }

  function stopTimeQuestion(){
        clearInterval(countdownInt);
    }


  



