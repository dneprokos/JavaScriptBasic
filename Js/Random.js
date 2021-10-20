const minNumberField = document.getElementById("minValue");
const maxNumberField = document.getElementById("maxValue");
const roundResultField = document.getElementById("result");
const generateButton = document.getElementById("generate_btn");

generateButton.addEventListener('click', generateRandomNumber);

function generateRandomNumber() {
    let minNumber = parseInt(minNumberField.value);
    let maxNumber = parseInt(maxNumberField.value);

    let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    console.log(randomNumber);

    roundResultField.value = randomNumber;
}