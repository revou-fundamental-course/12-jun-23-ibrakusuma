
function convertToFahrenheit() {
    var celsiusInput = document.getElementById('celsius').value;
    if (celsiusInput !== '') {
        var fahrenheitOutput = (celsiusInput * 9 / 5) + 32;
        document.getElementById('fahrenheit').value = fahrenheitOutput.toFixed(2);
    }
}

function convertToCelsius() {
    var fahrenheitInput = document.getElementById('fahrenheit').value;
    if (fahrenheitInput !== '') {
        var celsiusOutput = (fahrenheitInput - 32) * 5 / 9;
        document.getElementById('celsius').value = celsiusOutput.toFixed(2);
    }
}

function resetInputs() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
}

function reverseConversion() {
    var celsiusInput = document.getElementById('celsius').value;
    var fahrenheitInput = document.getElementById('fahrenheit').value;

    document.getElementById('celsius').value = fahrenheitInput;
    document.getElementById('fahrenheit').value = celsiusInput;
}
