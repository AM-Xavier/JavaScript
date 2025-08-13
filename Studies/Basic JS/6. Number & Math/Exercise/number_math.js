const number = Number(prompt("Enter any number:"));
const numberTitle = document.getElementById('number-title');
const text = document.getElementById('text');

numberTitle.innerHTML = number;

text.innerHTML += '';
text.innerHTML += `<p>The square root of your number is: ${Math.sqrt(number)} </p>`;
text.innerHTML += `<p>${number} is an interger: ${Number.isInteger(number)} </p>`;
text.innerHTML += `<p>Floored: ${Math.floor(number)} </p>`;
text.innerHTML += `<p>Ceiled: ${Math.ceil(number)} </p>`;
text.innerHTML += `<p>With two decimal places: ${number.toFixed(2)}</p>`;