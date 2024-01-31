<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="https://cdn.freecodecamp.org/universal/favicons/favicon.ico">
    <title>Palindrome Checker</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<main class="container">
    <img class="freecodecamp-logo" src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg" alt="freecodecamp logo">
    <h1>Is it a palindrome</h1>
    <div class="palindrome-div">
        <label for="text-input">Enter in text to check for a palindrome:
        </label>
        <input class="palindrome-input" id="text-input" value="" type="text">
        <button class="palindrome-btn" id="check-btn">Check</button>
        <div class="results-div hidden" id="result"></div>
    </div>
    <div class="palindrome-definition-div">
        <p class="palindrome-definition">
            <span role="img" aria-label="light-bulb">💡</span>
            A <dfn>palindrome</dfn> is a word or sentence that's spelled the same
            way both forward and backward, ignoring punctuation, case, and
            spacing.
        </p>
    </div>
</main>
<script src="script.js"></script>
</body>
</html>
