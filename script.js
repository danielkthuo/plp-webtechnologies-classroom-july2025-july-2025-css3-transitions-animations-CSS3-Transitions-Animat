/* ================= Part 2: Functions ================= */

// Global variable
let globalMultiplier = 10;

// Function with parameter + return value
function multiplyByGlobal(num) {
  // local variable
  let result = num * globalMultiplier;
  return result; // return value
}

// Function that demonstrates calling and DOM manipulation
function showCalculation() {
  let input = 5; // example number
  let output = multiplyByGlobal(input); // reuse function
  document.getElementById("function-output").textContent =
    `multiplyByGlobal(${input}) = ${output}`;
}

/* ================= Part 3: JS + CSS ================= */

const animateBtn = document.getElementById("animate-btn");
const animatedBox = document.getElementById("animated-box");

function triggerAnimation(element, className) {
  // remove class if already applied (so animation can replay)
  element.classList.remove(className);

  // force reflow to restart animation
  void element.offsetWidth;

  // add class again
  element.classList.add(className);
}

// Event listener to trigger animation
animateBtn.addEventListener("click", () => {
  triggerAnimation(animatedBox, "animate");
});
