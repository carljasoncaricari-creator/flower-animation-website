window.onload = function () {
  const animationScreen = document.getElementById("animation-screen");
  const proceedBtn = document.getElementById("proceed-btn");
  const noteScreen = document.getElementById("note-screen");

  // Show flowers first
  setTimeout(() => {
    proceedBtn.style.display = "block"; // show button after 3s
  }, 3000);

  // When Proceed is clicked → show note
  proceedBtn.addEventListener("click", () => {
    animationScreen.style.display = "none";
    noteScreen.style.display = "block";
  });
};
