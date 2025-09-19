const animationScreen = document.getElementById("animation-screen");
const noteScreen = document.getElementById("note-screen");
const proceedBtn = document.getElementById("proceed-btn");

// Generate floating flowers
for (let i = 0; i < 20; i++) {
  let flower = document.createElement("div");
  flower.classList.add("flower");
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = 4 + Math.random() * 3 + "s";
  flower.style.animationDelay = Math.random() * 5 + "s";
  animationScreen.appendChild(flower);
}

// Show proceed button after 6 seconds
setTimeout(() => {
  proceedBtn.style.opacity = "1";
  proceedBtn.style.pointerEvents = "auto";
}, 6000);

// Switch to note screen
proceedBtn.addEventListener("click", () => {
  animationScreen.style.display = "none";
  noteScreen.style.display = "flex";
});
