function displayInput(event) {
    event.preventDefault(); // Prevent the default form submission
    var userInput = document.getElementById('userInput').value;
    document.getElementById('output').innerHTML = userInput;
}
