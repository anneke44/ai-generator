function generateStory(event) {
  event.preventDefault();

  new Typewriter("#short-story", {
    strings: "Story goes here",
    autoStart: true,
    delay: 25,
    cursor: null,
  });
}

let formElement = document.querySelector("#input-form");
formElement.addEventListener("submit", generateStory);
