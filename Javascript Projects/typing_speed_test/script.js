const words = [
  "hello",
  "please",
  "welcome",
  "bus",
  "stop",
  "station",
  "word",
  "script",
  "yoga",
  "tennis",
  "football",
  "score",
  "selfie",
  "tree",
  "bodygaurd",
  "backpack",
  "building",
  "hobby",
  "chocolate",
  "binge",
  "like",
  "relationship",
  "love",
  "mind",
  "breath",
  "jet",
  "lagging",
  "loggin",
  "follow",
  "full",
  "error",
  "correct",
  "shuffle",
  "insist",
  "playground",
  "game",
  "home",
  "war",
  "zone",
  "copy",
  "delete",
  "book",
  "shelf",
  "self",
  "yours",
  "mat",
  "cat",
  "dog",
  "car",
  "mom",
  "dad",
  "monkey",
  "random",
  "evengually",
  "even",
  "decorate",
  "text",
  "generator",
  "moffin",
  "cake",
  "coffee",
  "tea",
  "milk",
  "mocha",
  "macha",
  "shampoo",
  "hair",
  "wig",
  "jobless",
  "worker",
  "marker",
  "cocacolla",
  "elephant",
  "zebbra",
  "zigzag",
  "giraffe",
  "sleep",
  "ship",
  "trip",
  "boat",
  "lake",
  "late",
  "mate",
  "male",
  "female",
  "cookie",
  "cooking",
  "making",
  "going",
  "train",
  "kick",
  "heaven",
  "cloud",
  "nine",
  "flying",
  "dying",
  "killing",
  "doing",
  "swimming",
  "swim",
  "joy",
  "jogging",
  "grave",
  "yard",
  "stone",
  "water",
  "snake",
  "blood",
  "gun",
  "sum",
  "moon",
  "star",
  "blak",
  "arabic",
  "english",
  "king",
  "queen",
  "forest",
  "jump",
  "metro",
  "kitchen",
  "food",
  "fish",
  "dish",
  "orange",
  "pine",
  "pie",
  "hex",
  "decimal",
  "binary",
  "unary",
  "arithmatic",
  "math",
  "water",
  "waiter",
  "restraunt",
  "family",
  "sister",
  "brother",
  "spell",
  "right",
  "wrong",
  "ring",
  "spill",
  "dark",
  "light",
  "line",
  "mile",
  "lane",
  "late",
  "rush",
  "rich",
  "carry",
  "kong",
  "yellow",
  "rice",
  "sweet",
  "open",
  "close",
  "mind",
  "mine",
  "sour",
  "grape",
  "damp",
  "piano",
  "instrument",
  "instruct",
  "teacher",
  "touch",
  "sensitive",
  "gross",
  "grass",
  "soap",
  "soup",
  "tomato",
  "tir",
  "goal",
  "goat",
  "cow",
  "greedy",
  "creepy",
  "bread",
  "beer",
  "pizza",
  "burger",
  "soya",
  "sauce",
  "slim",
  "scam",
  "copy",
  "paste",
  "pasta",
  "learning",
  "scream",
  "crazy",
  "cause",
  "is",
  "easy",
  "trim",
  "cards",
  "smash",
  "potato",
  "police",
  "drawing",
  "am",
  "were",
  "was",
  "enemy",
  "friend",
  "frise",
  "fire",
  "name",
  "men",
  "super",
  "spider",
  "movie",
  "film",
  "forbidden",
  "driver",
  "echo",
  "accent",
  "eccentrate",
];
// select the document
const textContainer = document.getElementById("text_container");
const timerElement = document.getElementById("timer");
const finalScoreElement = document.getElementById("final_score");
const tryAgainButton = document.getElementById("try_again");
//variables
let totalTyped = "";
let errors = 0;
let currentCharIndex = 0;
let timeLeft = 60;
let typingStarted = false;
let timerInterval;
let totalTime = 60;
let longText;
//shuffle words
function shuffleArray(array) {
  const arrayLength = array.length;
  for (let i = arrayLength - 1; i > 0; i--) {
    const randomArrIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomArrIndex]] = [array[randomArrIndex], array[i]];
  }
  return array;
}
//Test: shuffle array
// console.log(shuffleArray(words));
// const something = ["a", "b", "c", "d"];
// shuffleArray(something);

//combine shuffle words into one long string with spaces
function generateLongText() {
  const shuffleWords = shuffleArray([...words]); //no mutation and extra memory
  return shuffleWords.join(" ");
}

//calculate wpm
function calculatedScore() {
  const wordsTyped = totalTyped.trim().split(/\s+/).length;
  const baseWPM = Math.round(wordsTyped / totalTime) * 60;
  const adjustedWPM = Math.max(baseWPM - errors, 0);
  return adjustedWPM;
}
//Display Timer and timeLeft
function startTimer() {
  if (!typingStarted) {
    typingStarted = true;
    timerInterval = setInterval(() => {
      timeLeft--;
      timerElement.textContent = `Time Left: ${timeLeft}s`;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        endTimer();
      }
    }, 1000);
  }
}
function endTimer() {
  timerElement.textContent = `Time's up!`;
  finalScoreElement.textContent = `Final WPM:${calculatedScore()}`;
  textContainer.style.display = "none";
  tryAgainButton.style.display = "block";
}
//handle typing and calculate char,errors and index for tracking
document.addEventListener("keydown", (e) => {
  //for reset errors coun in each press key
  errors = 0;
  startTimer();
  if (e.key === "Backspace" || e.key === "ArrowLeft") {
    if (totalTyped.length > 0) {
      currentCharIndex = Math.max(currentCharIndex - 1, 0);
      totalTyped = totalTyped.slice(0, -1);
    }
  } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
    currentCharIndex += 1;
    totalTyped += e.key;
  }
  //track the char
  const longTextArrayChars = longText.split("");
  //what happen for **text container** when user press key down
  textContainer.innerText = "";
  for (let char = 0; char < longTextArrayChars.length; char++) {
    const span = document.createElement("span");
    span.classList.add("char");
    if (char < totalTyped.length) {
      if (totalTyped[char] === longTextArrayChars[char]) {
        span.classList.add("correct");
      } else {
        errors++;
        console.log(errors);
        span.classList.add("error");
      }
      if (char === totalTyped.length - 1) {
        span.classList.add("current_char");
      }
    }
    span.textContent = longTextArrayChars[char];
    textContainer.appendChild(span);
  }
  //scroll to the left while typing
  if (totalTyped.length >= 40) {
    const scrollAmount = (totalTyped.length - 40) * 14; // if totalTyped.lenght = 100 then we have 60 times scroll 14 px
    textContainer.scrollLeft = scrollAmount;
  }
  // track the string with underline
});

// Reset test
function resetTest() {
  clearInterval(timerInterval);
  timeLeft = 60;
  totalTyped = "";
  errors = 0;
  currentCharIndex = 0;
  typingStarted = false;
  timerElement.textContent = `Times Left : ${timeLeft}s`;
  finalScoreElement.textContent = ``;
  textContainer.style.display = "block";
  tryAgainButton.style.display = "none";
  textContainer.scrollLeft = 0;
  init();
}

// Initial version test
function init() {
  if (isMobileDevice()) {
    showMobileMessage();
    applyMobileStyles();
  } else {
    // show the text typing test in text container
    applyDesktopStyles();
    longText = generateLongText();
    textContainer.textContent = longText;
    timerElement.textContent = `Times Left : ${timeLeft}s`;
  }
}
tryAgainButton.addEventListener("click", resetTest);

//detect if device is mobile
function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth < 800;
}
//window.matchMedia("(pointer: coarse)")
/**means:

/Mobi|Android/i → regex pattern
| → OR
i → case‑insensitive
.test() → checks if the text matches
So it asks:

“Does the userAgent contain Mobi OR Android?” */
function showMobileMessage() {
  textContainer.textContent =
    "This typing test is designed for desktop use only";
}

//Mobile  and Desktop styles
function applyMobileStyles() {
  textContainer.style.height = "20%";
  textContainer.style.whiteSpace = "normal";
  textContainer.style.width = "fit-content";
  timerElement.textContent = "";
}
function applyDesktopStyles() {
  textContainer.style.height = "fit-content";
  textContainer.style.whiteSpace = "nowrap";
  timerElement.textContent = `Time Left: ${timeLeft}s`;
}
//startup
init();
