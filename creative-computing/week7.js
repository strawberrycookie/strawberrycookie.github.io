function updateTime(){
 var timeHolder = document.querySelector("#time")

 var now = new Date()

 var time = now.toTimeString()

 timeHolder.innerHTML = time

 timeHolder.style.transform = "rotate(" + now.getSeconds() * 6 + "deg)"
}
setInterval(updateTime, 1000)
