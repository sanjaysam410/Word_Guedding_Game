const inputs = document.querySelector(".inputs"),
    hintTag = document.querySelector(".hint"),
    guessLeft = document.querySelector(".guess-left span"),
    wrongLetter = document.querySelector(".wrong-letter span"),
    resetBtn = document.querySelector(".reset-btn"),
    typingInput = document.querySelector(".typing-input"),
    statusBanner = document.getElementById("statusBanner"),
    statusMessage = document.getElementById("statusMessage"),
    statusButtons = document.getElementById("statusButtons");

let word, maxGuesses, incorrectLetters = [], correctLetters = [], wrongGuessCount = 0;

function randomWord() {
    let ranItem = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranItem.word;
    maxGuesses = word.length >= 5 ? 8 : 6;
    correctLetters = [];
    incorrectLetters = [];
    wrongGuessCount = 0;

    // Clear hints and start with the first one
    hintTag.innerHTML = `<p><strong>Hint 1:</strong> ${ranItem.hints[0]}</p>`;
    
    guessLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrectLetters;

    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`;
    }
    inputs.innerHTML = html;
}
randomWord();

function showStatus(message, isSuccess) {
    // Blur the background
    document.querySelector(".wrapper").classList.add("blurred");

    // Clear previous buttons
    statusButtons.innerHTML = "";

    // Add the message
    statusMessage.innerHTML = message;

    // Add appropriate class for success or failure
    statusBanner.classList.add("show");
    if (isSuccess) {
        // Success logic
        statusBanner.classList.add("success-banner");
        statusBanner.classList.remove("failure-banner");
        statusMessage.innerHTML = `<i class="won"></i>
            <div class="celebration">${message}</div>`;

        // Add "Next Word" button
        let nextWordButton = document.createElement("button");
        nextWordButton.innerText = "Next Word";
        nextWordButton.onclick = () => {
            randomWord(); // Load new word
            statusBanner.classList.remove("show");
            document.querySelector(".wrapper").classList.remove("blurred"); // Remove blur
        };
        statusButtons.appendChild(nextWordButton);
    } else {
        // Failure logic
        statusBanner.classList.add("failure-banner");
        statusBanner.classList.remove("success-banner");
        statusMessage.innerHTML = `<i class="fail"></i>
            <div>${message}</div>
            <div class="incorrect-guesses">
                <strong>Incorrect guesses:</strong> ${incorrectLetters.join(", ")}
            </div>
        `;

        // Add "Retry" button
        let retryButton = document.createElement("button");
        retryButton.innerText = "Retry";
        retryButton.onclick = () => {
            randomWord(); // Retry the same word
            statusBanner.classList.remove("show");
            document.querySelector(".wrapper").classList.remove("blurred"); // Remove blur
        };
        statusButtons.appendChild(retryButton);
    }

    // Ensure the banner remains visible until a button is clicked
}


function initGame(e) {
    let key = e.target.value.toLowerCase();
    if(key.match(/^[A-Za-z]+$/) && !incorrectLetters.includes(` ${key}`) && !correctLetters.includes(key)) {
        if(word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if(word[i] === key) {
                    correctLetters.push(key);
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        } else {
            maxGuesses--;
            incorrectLetters.push(` ${key}`);
            wrongGuessCount++; // Increment wrong guesses

            // Show second hint after 2 wrong guesses
            if (wrongGuessCount === 2 && wordList.some(item => item.word === word && item.hints.length > 1)) {
                let ranItem = wordList.find(item => item.word === word);
                hintTag.innerHTML += `<p><strong>Hint 2:</strong> ${ranItem.hints[1]}</p>`;
            }

            // Show third hint after 4 wrong guesses
            if (wrongGuessCount === 4 && wordList.some(item => item.word === word && item.hints.length > 2)) {
                let ranItem = wordList.find(item => item.word === word);
                hintTag.innerHTML += `<p><strong>Hint 3:</strong> ${ranItem.hints[2]}</p>`;
            }
        }

        guessLeft.innerText = maxGuesses;
        wrongLetter.innerText = incorrectLetters;
    }
    typingInput.value = "";

    setTimeout(() => {
        if(correctLetters.length === word.length) {
            showStatus(`Congrats! Your Guess is Correct ${word.toUpperCase()}`, true);
        } else if(maxGuesses < 1) {
            showStatus("Game over!\n Incorrect Guess.", false);
            for(let i = 0; i < word.length; i++) {
                inputs.querySelectorAll("input")[i].value = word[i];
            }
        }
    }, 100);
}

resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());
