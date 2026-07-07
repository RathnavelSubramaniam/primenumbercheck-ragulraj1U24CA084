/**
 * Checks if a given number is prime.
 * 
 * @param {number} n - The number to check.
 * @returns {boolean} True if the number is prime, false otherwise.
 */
function isPrime(n) {
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prime Number Checker</title>
</head>
<body>

<div class="container">
    <h2>Prime Number Checker</h2>
    <p>Enter a positive integer to check if it is a prime number.</p>
    
    <!-- User Input -->
    <input type="number" id="numberInput" placeholder="Enter a number" min="1">
    <button onclick="checkPrimeNumber()">Check</button>
    
    <!-- Result Display -->
    <div id="result"></div>
</div>

<script>
function checkPrimeNumber() {
    // 1. Fetch input value and element references
    const inputElement = document.getElementById("numberInput");
    const resultElement = document.getElementById("result");
    const num = parseInt(inputElement.value);

    // 2. Validate user input
    if (isNaN(num)) {
        resultElement.innerText = "Please enter a valid number.";
        return;
    }

    // 3. Mathematical check for primality
    let isPrime = true;

    if (num <= 1) {
        isPrime = false; // Numbers less than or equal to 1 are not prime
    } else {
        // Loop runs up to the square root of the number for maximum efficiency
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false; // Found a factor, so it is not prime
                break;           // Exit loop early to save computation
            }
        }
    }

    // 4. Output the result dynamically to the page
    if (isPrime) {
        resultElement.innerText = num + " is a prime number! 🎉";
        
    } else {
        resultElement.innerText = num + " is not a prime number.";
        
    }
}
</script>
</body>A
</html>
}

module.exports = isPrime;
