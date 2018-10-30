//This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var YTplayer;
function onYouTubeIframeAPIReady() {
  YTplayer = new YT.Player('YTplayer', {
    height: '630',
    width: '1120',
    videoId: 'PgCTDV4EyP4',
    playerVars: { 
        'autoplay': 0,
        'controls': 0, 
        'rel' : 0,
        'fs' : 0,
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
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


//on initialise le timer
var myTimer = 0;

function timer(){
  myTimer +=1
  console.log(myTimer);
}

//fonction qui permet de commencer le jeu après avoir appuyé sur le bouton Start Game
//cette fonction démarre aussi un timer qui nous servira de fil conducteur tout le long du jeu
function main() {
  console.log("le joueur a cliqué sur le boutton Start Game!")
  document.getElementById("overlay").style.display = "none";
  YTplayer.playVideo();
  console.log("le jeu a démarré")
  timer();
  setInterval(timer,1000);//On appelle le timer toutes les secondes

}




// //le game

// //on crée une fonction qui lance la question, avec le trigger temps=xxsec

var currentTime = 0;
// console.log(currentTime)


//FONCTION LANCERJEU NE FONCTIONNE PAS
// function lancerJeu(){
// if((YTplayer.getCurrentTime())==5){
//     console.log("currentTime=5secondes");
// }
// }


// //on fait une fonction qui permet de faire apparaitre la question
// function appearQuestion(){
// console.log("la fonction appearQuestion est appelée");
// }




// //on crée une classe pour les joueurs
// function Player() {
//     this.name = 'name';
//     this.score = 0 ;
//   }






