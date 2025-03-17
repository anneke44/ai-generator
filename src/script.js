function displayStory(response) {
  new Typewriter("#short-story", {
    strings: response.data.answer,
    autoStart: true,
    delay: 25,
    cursor: null,
  });
}

function generateStory(event) {
  event.preventDefault();

  let userInput = document.querySelector("#text-input");
  let apiKey = "04f3tf2c9f9bboc83b5050dcf54e2f1a";
  let context =
    "you are an AI assistant writing unique short stories of no more than 40 words. The stories are short and impactful leaving a powerful image behind. Give your answer in HTML format with a <br/> at the end of every sentence. Let the first word of your answer be wrapped in a <strong></strong> element. Leave a signature of 'Your AI Friend' at the bottom, add a <br/> in front of the signature and wrap in a <em></em> element.";
  let prompt = `write me a story which is based or inpsired by ${userInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let storyElement = document.querySelector("#short-story");
  storyElement.innerHTML = `
  <div class="loading">
  <div class="loading inner">
</div>
`;
  storyElement.classList.remove("hidden");
  axios.get(apiUrl).then(displayStory);
}

let formElement = document.querySelector("#input-form");
formElement.addEventListener("submit", generateStory);
