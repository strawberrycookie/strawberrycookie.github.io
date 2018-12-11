var box = document.querySelector("#box")
console.log(box)

window.addEventListener("mousemove", onMouseMove)

function onMouseMove() {
  document.body.style.backgroundColor = "lightblue"
}
