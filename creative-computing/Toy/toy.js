var follower = document.querySelector("heart.png")
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

  var imageSource = "fed1.jpg"
  feedClicks = feedClicks + 1;

  letter.src= imageSource

  console.log(feedClicks)

  if (feedClicks == 2) {
    console.log(letter)

    var imageSource = "fed2.jpg"

    letter.src= imageSource
 }
  if (feedClicks ==3) {
    console.log(letter)

    var imageSource = "fed3.jpg"

    letter.src=imageSource
  }
  if (feedClicks ==4) {
    console.log(letter)

    var imageSource = "fed4.jpg"

    letter.src=imageSource
  }
  if (petClicks == 1 && feedClicks == 1) {
    console.log(letter)

    var imageSource = "pet1,feed1.png"

    letter.src= imageSource
  }
  if (petClicks == 1 && feedClicks == 2) {
    console.log(letter)

    var imageSource = "pet1,feed2.png"

    letter.src= imageSource
  }
  if (petClicks == 2 && feedClicks == 1) {
    console.log(letter)

    var imageSource = "pet2,feed1.png"

    letter.src= imageSource

    function myFunction() {
      var x = document.getElementById("button");
      if (x.style.display === "none") {
      x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
  }

}

function pet() {
  console.log(letter)

  var imageSource = "pet1.png"
  petClicks = petClicks + 1;

  letter.src= imageSource

  if (feedClicks == 1 && petClicks == 1) {
    console.log(letter)

    var imageSource = "fed1,pet1.png"

    letter.src= imageSource
 }
 if (petClicks == 2) {
   console.log(letter)

   var imageSource = "pet2.png"

   letter.src= imageSource
 }
 if (petClicks == 3) {
   console.log(letter)

   var imageSource = "pet3.png"

   letter.src= imageSource
 }
  if (feedClicks == 2 && petClicks == 1) {
    console.log(letter)

    var imageSource = "fed2,pet1.png"

    letter.src= imageSource
 }
 if (feedClicks == 1 && playClicks ==1 && petClicks == 1) {
   console.log(letter)

   var imageSource = "fed1,play1,pet1.png"

   letter.src= imageSource
 }
 if (feedClicks ==3 && petClicks ==1) {
   console.log(letter)

   var imageSource = "fed3,pet1.png"

   letter.src= imageSource
 }
}

function play() {
  console.log(letter)

  var imageSource = "play1.png"
  playClicks = playClicks + 1;

  letter.src= imageSource
  if (feedClicks == 1 && playClicks == 1) {
    console.log(letter)

    var imageSource = "fed1,play1.png"

    letter.src= imageSource
  }
  if (feedClicks == 1&& playClicks == 2) {
    console.log(letter)

    var imageSource = "fed1,play2.png"

    letter.src= imageSource
  }
  if (feedClicks == 2 && playClicks == 1) {
    console.log(letter)

    var imageSource = "fed2,play1.png"

    letter.src= imageSource
  }
  if (feedClicks == 3 && playClicks == 1) {
    console.log(letter)

    var imageSource = "fed3,play1.png"

    letter.src= imageSource
  }
  if (petClicks == 1 && feedClicks == 1 && playClicks == 1) {
    console.log(letter)

    var imageSource = "pet1,feed1,play1.png"

    letter.src= imageSource
  }
  if (petClicks == 2 && playClicks == 1) {
    console.log(letter)

    var imageSource = "pet2,play1.png"

    letter.src= imageSource
  }
  if (petClicks == 1 && playClicks == 1) {
    console.log(letter)

    var imageSource = "pet1,play1.png"

    letter.src= imageSource
  }
}

function hit() {
  console.log(letter)

  var imageSource = "fed1,hit1.png"
  hitClicks = hitClicks + 1;

  letter.src= imageSource

  if (feedClicks == 1 && hitClicks == 1) {
    console.log(letter)

    var imageSource = "fed1,hit1.png"

    letter.src= imageSource
  }
  if (feedClicks == 1 && playClicks == 1 && hitClicks == 1) {
    console.log(letter)

    var imageSource = "fed1,play1,hit1.png"

    letter.src= imageSource
  }
  if (feedClicks == 2 && hitClicks == 1) {
    console.log(letter)

    var imageSource = "fed2,hit1.png"

    letter.src= imageSource
  }
  if (feedClicks == 3 && hitClicks == 1) {
    console.log(letter)

    var imageSource = "fed3,hit1.png"

    letter.src= imageSource
  }
  if (petClicks == 2 && hitClicks == 1) {
    console.log(letter)

    var imageSource = "pet2,hit1.png"

    letter.src= imageSource
  }
  if (petClicks == 1 && feedClicks ==1 && hitClicks == 1) {
    console.log(letter)

    var imageSource = "fed1,play1,hit1.png"

    letter.src= imageSource
  }
  if (petClicks == 1 && hitClicks == 1) {
    console.log(letter)

    var imageSource = "pet2,hit1.png"

    letter.src= imageSource
  }
}
