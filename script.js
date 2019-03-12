function appear(id){
  var CBO = document.getElementById(id);
  CBO.setAttribute('transform','translateX(0%)');
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
      header2.style.width="100vw";
      header2.style.position="fixed";
      header2.style.zIndex= 1000;
      header2.style.backgroundColor="white";
      header2.style.opacity="0.7";
      couleurh2_2.style.color="black";
      burger.style.color="black";

    }else{
      header2.style.position="relative";
      header2.style.backgroundColor="transparent";
      header2.style.opacity="unset";
      couleurh2_2.style.color="white";
      burger.style.color="white";

    }
  }
}
