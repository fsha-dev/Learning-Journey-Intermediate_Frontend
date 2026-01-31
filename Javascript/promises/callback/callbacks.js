function loadScript(src, callback, src2) {
  let script = document.createElement("script");
  script.src = src;
  let script2 = document.createElement("script");
  script2.src = src2;

  script.onload = () => {
    callback("script 1");
    document.head.append(script2);
  };
  script.onerror = () => {
    new Error(`Script load error for ${src}`);
  };

  script2.onload = () => {
    callback("script 2");
  };
  script2.onerror = () => {
    new Error(`Script load error for ${src2}`);
  };

  document.head.append(script);
}

loadScript("./script.js", logSth, "./script2.js");

function logSth(sth) {
  console.log(sth);
  console.log(new Date().getMilliseconds());
}

//🫣see how asynchronous function works :
//1. Frist script runs and in align of that the funtion runs
/*
function loadScript(src) {
  let script = document.createElement("script");
  script.src = src;

  document.head.append(script);
}

loadScript("./script.js");

function logSth(sth) {
  console.log(sth);
  console.log(new Date().getMilliseconds());
}
logSth("first script");
*/
