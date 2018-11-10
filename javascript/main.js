//Youtube API stuff
//This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var YTplayer;
function onYouTubeIframeAPIReady() {
  YTplayer = new YT.Player("YTplayer", {
    height: "630",
    width: "1120",
    videoId: "PgCTDV4EyP4",
    playerVars: {
      autoplay: 0,
      controls: 0,
      rel: 0,
      fs: 0
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  //event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    done = true;
  }
}

function stopVideo() {
  player.stopVideo();
}
////////////////////////////////////////////////////////////////////////

var actualScore = 0;
var questions = [
  "What is John John Florence’s first name?",
  "How many times has John John won the world title?",
  "what is your favorite food?",
  "Cloud Nine is a gnarly break. Where is it?"
];
var answers = [
  ["John", "John John", "Florence", "He doesn’t have one"],
  ["1", "2", "3", "4"],
  ["Ramen", "Burgers", "Pizza", "Tacos"],
  ["Philippines", "Bali", "France", "Hawaii"]
];
var correctAnswers = ["John John", "2", "Pizza", "Philippines"];

var gameAnswers = [];
var myTimer = 0;
var questionPosee = 0;

//On fait un timer indépendant qui démarre dès que l'utilisateur clique sur Start Game

function timer() {
  myTimer += 1;
  console.log(myTimer);
  lancerQuestions(); //on appelle la fonction qui va lancer les questions
}

//fonction qui permet de commencer le jeu après avoir appuyé sur le bouton Start Game
//cette fonction démarre aussi un timer qui nous servira de fil conducteur tout le long du jeu
function startGame() {
  console.log("le joueur a cliqué sur le boutton Start Game!");
  document.getElementById("overlayStart").style.display = "none";
  YTplayer.playVideo();
  console.log("le jeu a démarré");
  $("#score1").html(actualScore);
  timer();
  setInterval(timer, 1000); //On appelle le timer toutes les secondes
}

//fonction pour remplir la question et la réponse
function fillQuestion(x) {
  if (x > 0) {
    $("#question").html(questions[x - 1]);
    $("#buttonOne").html(answers[x - 1][0]);
    $("#buttonTwo").html(answers[x - 1][1]);
    $("#buttonThree").html(answers[x - 1][2]);
    $("#buttonFour").html(answers[x - 1][3]);
  } else {
    console.log("la question na pas été chargée");
  }
}

//fonction pour remettre le style de la question/boutons à zéro
function reinitStyleQuestion() {
  $("#buttonOne").prop("disabled", false);
  $("#buttonTwo").prop("disabled", false);
  $("#buttonThree").prop("disabled", false);
  $("#buttonFour").prop("disabled", false);
  $("#question").css("color", "white");
  $(".answerButton button").css("background-color", "#FFB6C4");
  $(".answerButton button").hover(
    function() {
      $(this).css("background-color", "#FFF1B6");
    },
    function() {
      $(this).css("background-color", "#FFB6C4");
    }
  );
  $("#svgcircle").css("stroke", "#FFB6C4");
  $("#countdown-number").css("color", "white");
}

//fonction pour disable les boutons
function disableButtons() {
  $("#buttonOne").prop("disabled", true);
  $("#buttonTwo").prop("disabled", true);
  $("#buttonThree").prop("disabled", true);
  $("#buttonFour").prop("disabled", true);
}

//cas lorsque l'utilisateur clique sur un bouton de réponse
function clickButton(y) {
  $(".answerButton button").click(function(event) {
    var answerClicked = event.target.getAttribute("id");
    var answerGiven = event.target.textContent;
    var actualCorrectAnswer = correctAnswers[y - 1];
    console.log("j'ai cliqué!");

    switch (answerGiven) {
      //si la réponse donnée est la bonne
      case actualCorrectAnswer:
        console.log(actualScore);
        $("#" + answerClicked).css("background-color", "#99ffdd");
        console.log(actualScore);
        //on actualise le score
        actualScore += 1;
        console.log(actualScore);
        $("#score1").html(actualScore + "/4");
        //on change la couleur du bouton de la réponse en vert
        $("#question").html("YASS. Correct answer!");
        $("#question").css("color", "#99ffdd");
        //on arrête le timer
        stopTimeQuestion();
        console.log("stoptimequestion");
        //on désactive le click sur tous les boutons pour empécher une autre sélection
        disableButtons();
        console.log("disablebuttons");
        //on slidedown la question
        setTimeout(function() {
          slideDown("questionId");
        }, 3000);
        console.log("slidedown question");
        break;

      //sinon, on met le bouton en rouge
      default:
        $("#" + answerClicked).css("background-color", "#ff6666");
        $("#question").html("Lame. Wrong answer!");
        $("#question").css("color", "#ff6666");
        stopTimeQuestion();
        disableButtons();
        setTimeout(function() {
          slideDown("questionId");
        }, 3000);
        break;
    }
  });
}

//fonction pour afficher une question, les réponses, et gérer la carte
function fireQuestion(y) {
  //on réintialise le css de la question
  reinitStyleQuestion();
  //on charge la question, et on l'affiche
  fillQuestion(y);
  slideUp("questionId");
  lancerTimeQuestion();
  clickButton(y);
}

//Fonction qui annonce la fin du jeu: Final Score,
function finDuGame() {
  switch (actualScore) {
    case 0:
    case 1:
      $("#finalCom").html("Weak...");
      break;
    case 2:
    case 3:
      $("#finalCom").html("Not bad! You will do better next time");
      break;
    case 4:
    case 5:
      $("#finalCom").html("Perfect! Damn, you are so smart.");
      break;
  }
  console.log("Fin Du jeu!");
  YTplayer.stopVideo();
  document.getElementById("overlayEnd").style.display = "block";
  $("#finalScore").html(actualScore + "/4");
}

//fonction pour lancer les questions
function lancerQuestions() {
  switch (myTimer) {
    case 5:
      fireQuestion(1);
      break;
    case 20:
      fireQuestion(2);
      break;
    case 35:
      fireQuestion(3);
      break;
    case 50:
      fireQuestion(4);
      break;
    case 60:
      finDuGame();
      break;
    default:
      console.log("on continue");
      console.log(actualScore);
  }
}
