console.log(`script 2 is loaded`);

//Assignements javascript.info chapter promise
//https://javascript.info/promise-basics#tasks

//1

let promise = new Promise(function (resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(console.log);

//2

function delay(ms) {
  return new Promise(function (resolve, reject) {
    resolve();
    setTimeout(() => {
      console.log("it logged after the difinite time");
    }, ms);
  });
}
delay(3000).then(() => console.log("runs after 3 seconds"));

//3

function showCircle(cx, cy, radius) {
  return new Promise(function (resolve, reject) {
    let div = document.createElement("div");
    //Add styles
    div.style.position = "fixed";
    div.style.left = cx + "px";
    div.style.top = cy + "px";
    div.style.width = "0px";
    div.style.height = "0px";
    div.style.borderRadius = "50%";
    div.style.backgroundColor = "black";
    div.style.transform = "translate(-50%,-50%)";
    div.style.transition = "width 2s, height 2s";

    //Add to document
    document.body.append(div);

    //Start the animation after a samll delay(to ensure style is applied)
    setTimeout(() => {
      div.style.width = radius * 2 + "px";
      div.style.height = radius * 2 + "px";
    }, 10);

    // Listen for animation end
    div.addEventListener("transitionend", function () {
      resolve(div);
    });

    //handle errors
    div.addEventListener("transitioncancel", function () {
      reject(new Error("Animation was cancelled"));
    });
  });
}

showCircle(150, 150, 100).then((div) => {
  div.classList.add("message-ball");
  div.append("This is animated ball!!!");
});
