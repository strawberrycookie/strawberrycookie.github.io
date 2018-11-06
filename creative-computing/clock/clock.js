function updateTime(){
  var timeHolder =
  document.querySelector("#time")

  var now = new Date()
  var time = now.toTimeString();

  var s1 = document.querySelector(".s1")
  var s2 = document.querySelector(".s2")
  var s3 = document.querySelector(".s3")
  var s4 = document.querySelector(".s4")
  var s5 = document.querySelector(".s5")
  var s6 = document.querySelector(".s6")

  //timeHolder.innerHTML =time;
  if(now.getSeconds()%2 !=1){
    s1.style.borderColor = "violet";

  }else{
    s1.style.borderColor = "red";
  }
  if(now.getSeconds()%5 ==0){
    s2.style.borderColor = "blue";

  }else{
    s2.style.borderColor = "white";
  }

  if(now.getSeconds()%60 ==0){
    s3.style.borderColor = "skyblue";

  }else{
    s3.style.borderColor = "#33FFB5";
  }


  if(now.getSeconds()%2 !=1){
    s5.style.borderColor = "red";

  }else{
    s5.style.borderColor = "violet";
  }

  if(now.getSeconds()%30 !=1){
    s6.style.borderColor = "#170B6C";

  }else{
    s6.style.borderColor = "#02F4F0";
  }

  if(now.getSeconds()%10 ==0){
    s4.style.borderColor = "pink";

  }else{
    s4.style.borderColor = "yellow"
  }

  s1.style.transform = "rotate(" + now.getSeconds() * 6 + "deg)"

  s2.style.transform = "rotate(" + now.getSeconds() * 30 + "deg)"

  s3.style.transform = "rotate(" + now.getMinutes() * 6 + "deg)"

  s4.style.transform = "rotate(" + now.getSeconds() * 36 + "deg)"

  s6.style.transform = "rotate(" + now.getMinutes() * 30 + "deg)"
  }

setInterval(updateTime, 1000)
