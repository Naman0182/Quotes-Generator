let generateBtn = document.querySelector(".gen");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

window.addEventListener("load",getQuote);
generateBtn.addEventListener("click",getQuote);

async function getQuote() {

  const resp = await fetch("https://api.quotable.io/random");

  const data = await resp.json();

  show(data);
}

function show(data) {
  quote.innerHTML = ` "${data.content}"`;
  writer.innerHTML = ` ~ ${data.author}`
}