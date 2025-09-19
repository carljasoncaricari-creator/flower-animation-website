// Wait for the page to load
window.onload = function () {
  const animationContainer = document.getElementById("animation-container");
  const proceedBtn = document.getElementById("proceed-btn");
  const note = document.getElementById("note");

  // Step 1: Show animation for 3 seconds
  setTimeout(() => {
    proceedBtn.style.display = "block"; // show button
  }, 5000); // 3000 ms = 3 seconds

  // Step 2: When button is clicked, show note
  proceedBtn.addEventListener("click", () => {
    animationContainer.style.display = "none"; // hide animation
    proceedBtn.style.display = "none"; // hide button
    note.style.display = "block"; // show note
  });
};
