var button = document.getElementById("button");

button.addEventListener('click', function() {
  if (button.getAttribute("data-text-swap") == button.innerHTML) {
    button.innerHTML = button.getAttribute("data-text-original");
    //scratch
    crinkle.style.opacity = "1"
    scratch.style.opacity = "0"
  } else {
    button.setAttribute("data-text-original", button.innerHTML);
    button.innerHTML = button.getAttribute("data-text-swap");
    //crinkle
    scratch.style.opacity = "1"
    crinkle.style.opacity = "0"
  }
}, false);

document.addEventListener("mousemove", onMouseMove)

var crinkle = document.querySelector("#crinkle");
var scratch = document.querySelector("#scratch");

function onMouseMove(evt) {
  // get the movement X / Y properties frm addEventListener
  var x = evt.x
  var y = evt.y

  // connect those values to top / left css of box
  crinkle.style.left = x + "px"
  crinkle.style.top = y + "px"

  scratch.style.left = x + "px"
  scratch.style.top = y + "px"
}
