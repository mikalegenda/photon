// key: 563492ad6f91700001000001199eadf8ad9e415da695f6576d68d40d

const button = document.querySelector("button");
const text = document.querySelector("h1");

button.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((result) => result.json())
    .then((data) => {
      text.innerText = data.slip.advice;
    });
});
