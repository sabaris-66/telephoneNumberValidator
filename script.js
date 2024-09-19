const userInput = document.querySelector("#user-input");
const checkBtn = document.querySelector("#check-btn");
const clearBtn = document.querySelector("#clear-btn");
const results = document.querySelector("#results-div");

const regex = /^(1\s*)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;

const checkFunction = () => {
  if (!userInput.value) {
    alert("Please provide a phone number");
  } else {
    results.classList.remove("hidden");
    if (regex.test(userInput.value)) {
      results.textContent = `Valid US number: ${userInput.value}`;
    } else {
      results.textContent = `Invalid US number: ${userInput.value}`;
    }
    console.log(regex.test(userInput.value));
  }
};

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkFunction();
  }
});

checkBtn.addEventListener("click", checkFunction);

clearBtn.addEventListener("click", () => {
  results.textContent = "";
});
