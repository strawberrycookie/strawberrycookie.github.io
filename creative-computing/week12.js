var box = document.querySelector("#box")
console.log(box)

window.addEventListener(
  "mousemove",
  onMouseMove
)

function onMouseMove(evt) {
  console.log(evt.x+ " " + evt.y)

  box.style.left = evt.x + "px"
  box.style.top = evt.y + "px"
}
