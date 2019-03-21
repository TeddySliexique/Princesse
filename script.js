function appear(){
  var CBO = document.getElementById('side_bar');
  if (  CBO.style.transform=="translateX(" +   (-100) + "%)") {
      CBO.style.transform="translateX(" +   (0) + "%)";
  }
  else{CBO.style.transform="translateX(" +   (-100) + "%)";
  }
}

function disappear(){
  var CBO = document.getElementById('side_bar');
  CBO.style.transform="translateX(" +   (-100) + "%)";
}

function Fixed() {

  var header1 = document.getElementById('first');
  var header2 = document.getElementById('second');
  var couleurh2_1 = document.getElementById('titre1');
  var couleurh2_2 = document.getElementById('titre2');
  var burger = document.getElementById('burg')
  var couleur = document.getElementsByClassName('color');

  if(window.innerWidth>1300){
    if(window.scrollY>window.innerHeight-1 ){
      header1.style.width="99.3vw";
      header1.style.position="fixed";
      header1.style.zIndex= 1000;
      header1.style.backgroundColor="white";
      header1.style.opacity="0.7";
      couleurh2_1.style.color="black";
      for (var i = 0; i < couleur.length; i++) {
        couleur[i].style.color="black";
      }
    }else{
      header1.style.position="relative";
      header1.style.backgroundColor="transparent";
      header1.style.opacity="unset";
      couleurh2_1.style.color="white";
      for (var i = 0; i < couleur.length; i++) {
        couleur[i].style.color="white";
      }
    }
  }

  else{
    if(window.scrollY>window.innerHeight-1){
      header2.style.width="97.5vw";
      header2.style.position="fixed";
      header2.style.zIndex= 1000;
      header2.style.backgroundColor="white";
      header2.style.opacity="0.7";
      couleurh2_2.style.color="black";
      burger.style.color="black";
      burger.style.marginRight="2.5em";

    }else{
      header2.style.position="relative";
      header2.style.backgroundColor="transparent";
      header2.style.opacity="unset";
      couleurh2_2.style.color="white";
      burger.style.color="white";
    }
  }
}
function Underline(param){

  var home = document.getElementById("maison");
  var aboutme = document.getElementById("propos");
  var service = document.getElementById("serv");
  var portfol = document.getElementById("port");

  var div1 = document.getElementById("aboutme");
  var div2 = document.getElementById("services");
  var div3 = document.getElementById("portfolio");

  var hauteur1= div1.offsetTop;
  var hauteur2= div2.offsetTop;
  var hauteur3= div3.offsetTop;


  if(param < hauteur1){
    home.style.textDecoration="underline";
    aboutme.style.textDecoration="none";
    service.style.textDecoration="none";
    portfol.style.textDecoration="none";
  }
  if(hauteur1 <= param && param < hauteur2){
    home.style.textDecoration="none";
    aboutme.style.textDecoration="underline";
    service.style.textDecoration="none";
    portfol.style.textDecoration="none";
  }
  if(hauteur2 <= param && param< hauteur3){
    home.style.textDecoration="none";
    aboutme.style.textDecoration="none";
    service.style.textDecoration="underline";
    portfol.style.textDecoration="none";
  }
  if(hauteur3 <= param){
    home.style.textDecoration="none";
    aboutme.style.textDecoration="none";
    service.style.textDecoration="none";
    portfol.style.textDecoration="underline";
  }
}

function animated(param,param2){
  var div1 = document.getElementById("aboutme");
  var div2 = document.getElementById("services");
  var div3 = document.getElementById("portfolio");

  var hauteur1= div1.offsetTop;
  var hauteur2= div2.offsetTop;
  var hauteur3= div3.offsetTop;
  if (hauteur1 <= param2 && param2 < hauteur2) {
    if(param!=1){
      document.getElementById("jauge1").style.visibility = "visible"
      document.getElementById("jauge2").style.visibility = "visible";
      document.getElementById("jauge3").style.visibility = "visible";
      document.getElementById("jauge1").style.WebkitAnimation = "slider1 2s";
      document.getElementById("jauge2").style.WebkitAnimation = "slider2 2s";
      document.getElementById("jauge3").style.WebkitAnimation = "slider3 2s";
      param++;
    }
  }
}
