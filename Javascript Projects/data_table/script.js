const spinner = document.getElementById("spinner");
const table = document.getElementById("data_table");
const tableBody = document.getElementById("table_body");
const pagination = document.getElementById("pagination");
const prevBtn = document.getElementById("prev_btn");
const nextBtn = document.getElementById("next_btn");
const pageNumber = document.getElementById("page_number");

let data = [];

// Fetch data from API
const apiURL = "https://api.ninjas.ir/api/v1/person";
async function fetchData() {
  try {
    console.log("run");
    const response = await fetch(apiURL);
    const json = await response.json();
    // data = json.results;
    console.log(json);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Startup
fetchData();
// Dark Mode Functionality ---------------- //
const themeToggle = document.getElementById("theme_toggle");
const body = document.body;

// Check if dark mode is preferred or previously chosen
const isDarkMode = localStorage.getItem("dark_mode") === "true";

// Set initial mode
if (isDarkMode) {
  body.classList.add("dark_mode");
  themeToggle.innerText = "Light Mode";
}

//Toggle dark mode and update text
themeToggle.addEventListener("click", () => {
  body.style.transition = "background-color 0.3s, color 0.3s";
  if (body.classList.contains("dark_mode")) {
    body.classList.remove("dark_mode");
    themeToggle.innerText = "Dark Mode";
    localStorage.setItem("dark_mode", "false");
  } else {
    body.classList.add("dark_mode");
    themeToggle.innerText = "Light Mode";
    localStorage.setItem("dark_mode", "true");
  }
});
