// Select HTML elements
const inputField = document.getElementById('input');
const convertToFeetButton = document.getElementById('convert-to-feet');
const convertToYardsButton = document.getElementById('convert-to-yards');
const resultParagraph = document.getElementById('result');

// Function to convert inches to feet
function convertToFeet(inches) {
  return (inches / 12).toFixed(2);
}

// Function to convert inches to yards
function convertToYards(inches) {
  return (inches / 36).toFixed(2);
}

// Function to display the result
function displayResult(resultText) {
  resultParagraph.textContent = resultText;
}

// Event listener for Convert to Feet button
convertToFeetButton.addEventListener('click', () => {
  const inches = parseFloat(inputField.value);
  if (isNaN(inches)) {
    displayResult('Please enter a valid number.');
  } else {
    const feet = convertToFeet(inches);
    displayResult(`${inches} inches is equal to ${feet} feet.`);
  }
});

// Event listener for Convert to Yards button
convertToYardsButton.addEventListener('click', () => {
  const inches = parseFloat(inputField.value);
  if (isNaN(inches)) {
    displayResult('Please enter a valid number.');
  } else {
    const yards = convertToYards(inches);
    displayResult(`${inches} inches is equal to ${yards} yards.`);
  }
});
