const sentenses = [
  "as fanatically neat as the great detective himself",
  "Imagination however Hercule Poirot possessed in abundance",
  "ability to press a pair of trousers properly was in his opinion a rare accomplishment",
  "It was last night sir while you were out at the theatre with Mrs",
  "The matter he said was a somewhat delicate one and when you rang you were not to give your name to",
  "miners were feared dead after an explosion at a mine near Mons The home news was little better",
  "The inventions of war the secret weapons they are not for me",
  "his elaborately waxed moustache told himself that he had never before in a long career been considered unobtrusive",
  "ground floor of the house on the east side Outside the light was beginning to fade Sir Claud's butler Tredwell",
  "There was a discreet knock on the study door and Tredwell appeared in the door",
  "It was while Tredwell was serving the dessert course that Sir Claud suddenly addressed",
  "handkerchief from her handbag as Caroline Amory looked on solicitously Dabbing at",
  "whether to go in search of smelling salts or not She moved indecision",
  "after seeing Miss Amory out Poirot turned his attention to Edward Raynor",
  "If you think it was I who dropped it you are mistaken he declared",
  "My friend the garden outside that window is very fine",
  "First of all I ought to tell you that there can be no doubt about it your uncle was poisoned last nigh",
  "any reason to suspect that Richard for example might have felt so desperate about his financial situation that he",
  "would think of killing his father in order to get his hands",
  "seem to want a police investigation into his uncle's death",
  "steps quickly back to the house without being seen by either of them",
  "there is very little time for you to decide on the most prudent course of action",
  "Of course I recognized that face as soon as I arrived",
  "at which Lucia appeared visibly to relax Then suddenly lean",
  "I hated that life, that awful life I was forced to live with my mother I felt degraded",
  "I met Richard That was the most wonderful thing that had ever had",
  "I sold the necklace and paid him I thought that was the end of it all",
  "But yesterday he turned up here. He had heard of this formula that Sir Claud",
  "had passed me a note at the same time as the key, and they were both in my dress",
];
//variables
let typingText = "";
let totalTyped = 0;
let errors = 0;
let textDisplay;
let splitedTextDisplay;
let timerAmount = 60;
const totalTime = 60;
let timerInterval;
let isTypingStarted = false;
let current_char_index = 0;
let displayedSpansArr;
//document select items
const originalTypingtextDisplay = document.getElementById("text_container");
const typingTextBox = document.getElementById("words_typing_box");
const tryAgainButton = document.getElementById("try_again_button");
const timerElement = document.getElementById("timer");
const mistakeBoxEl = document.getElementById("mistackes_box");
const mistakeValueEl = document.getElementById("mistakes_value");
const accuracyBoxEl = document.getElementById("accuracy_box");
const accuracyValue = document.getElementById("accuracy_value");
const WPMEl = document.getElementById("final_wpm");
const WPMValue = document.getElementById("wpm_value");

//shuffle the sentences
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}
// choose a random item between
function chooseRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
// generate a text for each round
function generateAText(texts) {
  return (textDisplay = chooseRandomItem(shuffleArray(sentenses)));
}

// convert long text into chart
function textToCharSplited(text) {
  return text.trim().split("");
}
// converting string Text Display to char
function convertStringToCharForTextDisplay() {
  originalTypingtextDisplay.textContent = "";
  displayedSpansArr = [];
  for (let i = 0; i < splitedTextDisplay.length; i++) {
    const WordByWordSpan = document.createElement("span");
    WordByWordSpan.textContent = splitedTextDisplay[i];
    originalTypingtextDisplay.append(WordByWordSpan);
    displayedSpansArr.push(WordByWordSpan);
  }
}
//highlight spans
function updateHighlight() {
  displayedSpansArr.forEach((s) => {
    s.classList.remove("highlight");
  });
  if (current_char_index < displayedSpansArr.length) {
    displayedSpansArr[current_char_index].classList.add("highlight");
  }
}
document.addEventListener("keydown", (e) => {
  if (typingText <= 0) {
    convertStringToCharForTextDisplay();
  }
});

//handling typing by press down the keys
document.addEventListener("keydown", (e) => {
  startTimer();
  errors = 0;
  if (e.key === "Backspace" || e.key === "ArrowLeft") {
    if (typingText.length > 0) {
      typingText = typingText.slice(0, -1);
      totalTyped = Math.max(totalTyped - 1, 0);
      current_char_index--;
    }
  } else if (
    e.key.length === 1 &&
    !e.metaKey &&
    !e.ctrlKey &&
    typingText.length < splitedTextDisplay.length
  ) {
    typingText += e.key;
    totalTyped++;
    current_char_index++;
  }
  //add highlight style to current charIndex in text display
  updateHighlight();
  //clear typying text  box after each key press
  typingTextBox.innerText = "";
  //handling typing chars
  for (let i = 0; i < typingText.length; i++) {
    const span = document.createElement("span");
    // highlight currentIndex display text
    // .classList.add("highlight");
    //not add style for blank spaces
    if (typingText[i] !== " ") {
      span.classList.add("char");
    }
    if (typingText[i] === splitedTextDisplay[i]) {
      span.classList.add("correct");
    } else {
      errors++;
      span.classList.add("error");
    }
    span.textContent = typingText[i];
    typingTextBox.append(span);
  }
});

// reset typing test
function resetTest() {
  typingText = "";
  typingTextBox.innerHTML = "";
  totalTyped = 0;
  errors = 0;
  textDisplay = generateAText(sentenses);
  originalTypingtextDisplay.textContent = textDisplay;
  splitedTextDisplay = textToCharSplited(textDisplay);
  console.log(typingText, totalTyped, errors);
  timerAmount = 60;
  timerElement.innerHTML = "01:00";
  clearInterval(timerInterval);
  isTypingStarted = false;
}

// Clicking try again button
tryAgainButton.addEventListener("click", () => {
  resetTest();
  init();
  tryAgainButton.blur();
});

//calculations :
function calcWPM() {
  const wordsTyped = typingText.trim().split(/\s+/).length;
  const baseWPM = Math.round((wordsTyped / totalTime) * 60);
  const adjustedWPM = Math.max(baseWPM - errors, 0);
  return adjustedWPM;
}
function calcAccuracy() {
  const totalTypedNum = typingText.trim().length;
  const correctChars = totalTypedNum - errors;
  accuracyRate = Math.round((correctChars / totalTypedNum) * 100);
  return accuracyRate;
}
// Start timer
function startTimer() {
  if (!isTypingStarted) {
    isTypingStarted = true;
    timerInterval = setInterval(() => {
      timerAmount--;
      timerElement.textContent = `00:${String(timerAmount).padStart(2, "0")}`;
      if (timerAmount <= 5 && timerAmount >= 0) {
        timer.classList.add("error", "pulse,bold_font-weight");
      }
      if (timerAmount <= 0) {
        clearInterval(timerInterval);
        endTimer();
        timer.classList.remove("error", "pulse,bold_font-weight");
      }
    }, 1000);
  }
}
function endTimer() {
  mistakeBoxEl.style.display = "block";
  accuracyBoxEl.style.display = "block";
  WPMEl.style.display = "block";
  WPMValue.innerText = calcWPM();
  accuracyValue.innerText = calcAccuracy();
  mistakeValueEl.innerText = errors;
}

// Initial values
function init() {
  generateAText(sentenses);
  originalTypingtextDisplay.textContent = textDisplay;
  splitedTextDisplay = textToCharSplited(textDisplay);
  // content selected elements in doc
  mistakeBoxEl.style.display = "none";
  accuracyBoxEl.style.display = "none";
  final_wpm.style.display = "none";
  timerElement.innerText = "01:00";
}
init();
