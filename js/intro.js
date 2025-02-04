const intro = document.getElementById("intro");

const INTRO_SHOWN_KEY = "introShown";

const introShown = localStorage.getItem(INTRO_SHOWN_KEY);

if (!introShown) {
  intro.classList.remove(HIDDEN_CLASSNAME);

  setTimeout(() => {
    intro.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(INTRO_SHOWN_KEY, "true");
  }, 14000);
} else {
  intro.classList.add(HIDDEN_CLASSNAME);
}

const introButton = document.querySelector(".intro-play");

introButton.addEventListener("click", () => {
  intro.classList.remove(HIDDEN_CLASSNAME);
  setTimeout(() => {
    intro.classList.add(HIDDEN_CLASSNAME);
  }, 14000);
});
