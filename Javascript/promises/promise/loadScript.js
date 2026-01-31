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

loadScript("./script.js")
  .then(() => {
    console.log("script loaded successfully");
    loadScript("./script2.js");
  })
  .catch(() => console.log("error occured"));
