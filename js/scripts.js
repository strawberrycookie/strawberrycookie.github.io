var i = 0;
var txt = 'Hello. This space is designed to let you experience what we know as fear. Once you are ready, open the door.';
var speed = 35;
var txt2 = "Fear is defined by an emotion we feel when we are at the doorsteps of horror. But fear is more than just an emotion, it is an atmostphere, and thus it is most important element when creating horror."
var txt3 ="Congratulation. To be honest, there was no jumpscare to begin with. What you felt however was the atmostphere, the fear that was built to ultimately affect your actions, your speed, you."


function showButton() {
    document.getElementById("eubin").style.display = "inline";
}

function showButton2() {
    document.getElementById("nathan").style.display = "inline";
}

function showButton3() {
    document.getElementById("klee").style.display = "inline";
}

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("solo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


function driver() {
  typeWriter();

  setTimeout(showButton, speed*(txt.length + 10));
}

function typeWriter2() {
  if (i < txt2.length) {
    document.getElementById("duo").innerHTML += txt2.charAt(i);
    i++;
    setTimeout(typeWriter2, speed);
  }
}

function claimer() {
  typeWriter2();

  setTimeout(showButton2, speed*(txt2.length + 10));
}

var txt3 ="Congratulation. To be honest, there was no jumpscare to begin with. What you felt however was the atmostphere, the fear that was built to ultimately affect your actions, your speed, you."


function typeWriter3() {
  if (i < txt3.length) {
    document.getElementById("paimon").innerHTML += txt3.charAt(i);
    i++;
    setTimeout(typeWriter3, speed);
  }
}

function genshin() {
  typeWriter3();

  setTimeout(showButton3, speed*(txt3.length + 10));
}
