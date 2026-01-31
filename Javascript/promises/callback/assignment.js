//Task: growing ball
function showCircle(cx, cy, radius) {
  let div = document.createElement("div");
  let body1 = document.getElementsByTagName("body");
  div.className = "grown_circle";
  div.style.backgroundColor = "black";
  div.style.height = "20px";
  div.style.width = "20px";
  div.style.border = "none";
  div.style.borderRadius = "100%";
  // div.style.height = `${cy}px`;
  // div.style.widows = `${cx}px`;
  // div.style.radius = `${radius}%`;
  body1.append(div);
  console.log(div);
}
// let line = document.createElement("p");
// let text = document.createTextNode("Let's learn javascript better");
// line.append(text);
// document.body.appendChild(line);
showCircle(150, 150, 100);
