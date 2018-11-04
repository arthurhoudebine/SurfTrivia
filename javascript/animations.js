  //fonction pour faire apparaitre/disparaitre les questions
function slideUp(el) {
    var elem = document.getElementById(el);
    //elem.style.transition = "all 1s ease-out";
    elem.style.height = "500px";
  }
  function slideDown(el) {
    // var elem = document.getElementById(el);
  //  elem.style.transition = "all 2s ease-in";
  //   elem.style.height = "0px";
  $('#' + el).addClass('hide');
      setTimeout( function(){
        $('#' + el).remove()
      },2000);;   
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
  var countdown = 10;
  
  countdownNumberEl.textContent = countdown;
  
  countdownInt = setInterval(function() {
    countdown--;
    countdownNumberEl.textContent = countdown;
    // if (countdown === 0) {
    //   clearInterval(countdownInt);
    //   // slideDown('questionId');
    // }
  }, 1000);
  }

  function stopTimeQuestion(){
        clearInterval(countdownInt);
    }


  



