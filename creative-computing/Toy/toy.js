var follower = document.querySelector("K.jpg")
window.addEventListener("mousemove", onMouseMove)

function onMouseMove(evt) {
  box.style.left = evt.x + 20 + "px"
  box.style.top = evt.y + 20 + "px"
}

var button1 = document.getElementById("button1");

button1.addEventListener('click', feed)

var button2 = document.getElementById("button2");

button2.addEventListener('click', pet)

var button3 = document.getElementById("button3")

button3.addEventListener('click', play)

var button4 = document.getElementById("button4")

button4.addEventListener('click', hit)

var letter = document.querySelector("#letter")

var petClicks = 0;

var feedClicks= 0;

var playClicks= 0;

var hitClicks = 0;

function feed() {
  console.log(letter)

  var imageSource = "R.jpg"
  feedClicks = feedClicks + 1;

  letter.src= imageSource

  console.log(feedClicks)

  if (feedClicks == 2) {
    console.log(letter)

    var imageSource = "placetaker.jpg"

    letter.src= imageSource
 }
}

function pet() {
  console.log(letter)

  var imageSource = "P.jpg"
  petClicks = petClicks + 1;

  letter.src= imageSource

}

function play() {
  console.log(letter)

  var imageSource = "U.jpg"
  playClicks = playClicks + 1;

  letter.src= imageSource

}

function hit() {
  console.log(letter)

  var imageSource = "X.jpg"
  hitClicks = hitClicks + 1;

  letter.src= imageSource

}
