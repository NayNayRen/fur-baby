function loadMainScript() {
  const upArrow = document.querySelector(".up-arrow");

  // show and hide up arrow
  function activateUpArrow() {
    if (document.documentElement.scrollTop > 0) {
      upArrow.style.right = "10px";
    } else {
      upArrow.style.right = "-60px";
    }
  }

  window.addEventListener("scroll", () => {
    activateUpArrow();
  });
  window.addEventListener("resize", () => {
    activateUpArrow();
  });
  activateUpArrow();
}
window.onload = loadMainScript;
