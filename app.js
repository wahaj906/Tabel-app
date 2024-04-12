const form = document.querySelector("#taleGenrator");
const input = document.querySelector("#tableNumber");
const result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const tableOf = input.value;
  result.innerHTML = "";

  for (i = 1; i <= 12; i++) {
    const message = `${tableOf} x ${i} = ${tableOf * i}`;

    result.innerHTML += `<p>${message}</p><hr>`;
  }
});