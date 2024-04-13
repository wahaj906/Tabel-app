let form = document.querySelector("#taleGenrator");
let input = document.querySelector("#tableNumber");
let result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let tableOf = input.value;
  result.innerHTML = "";

  for (let i = 1; i <= 12; i++) {
    const message = `${tableOf} x ${i} = ${tableOf * i}`;

    result.innerHTML += `${message} <br>`;
  }
});
