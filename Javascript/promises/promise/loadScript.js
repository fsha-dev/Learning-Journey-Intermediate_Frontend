// using promises instead of callback
function loadScript(src) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(`error occured in script ${src}`);

    document.head.append(script);
  });
}

let promise = loadScript("./script.js");

promise.then(() => console.log("script loaded successfully"));
promise.catch(() => console.log("error occured"));

promise.then(loadScript("./script2.js"));
