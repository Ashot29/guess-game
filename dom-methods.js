let guessedLetterCount = 0;

let handler = function(event) {
    let target = event.target;
    let value = target.value;

    console.log(guessedLetterCount, guessingWord.length);
    if (guessedLetterCount === guessingWord.length - 1) {
        lettersDiv.removeEventListener('click', handler);
        alert(`YOU HAVE WON !!!!!!!!!!!!! THE ANSWER IS ${guessingWord.toUpperCase()} !!!!`)
        alert('Refresh to play again.')
    }

    if (target.classList.contains('letter_button')) {

        if (wordArray.includes(value)) {
            let answers = document.querySelectorAll('.letter');
            console.log(answers);

            // tesq
            target.style.background = 'green';
            target.style.color = 'white';
            target.disabled = true

            for (let i = 0; i < answers.length; i++) {
                
                if (answers[i].dataset.value === value) {
                    console.log(answers[i]);
                    answers[i].style.display = 'initial';
                    guessedLetterCount += 1;
                    // console.log(guessedLetterCount);
                }
            }

        } else if (!wordArray.includes(value)) {
            target.style.background = 'red';
            target.style.color = 'white';
            target.disabled = true;

            if (leftTries >= 2) {
                leftTries -= 1;
                triesCount.textContent = leftTries;
            } else if (leftTries === 1) {
                leftTries -= 1;
                triesCount.textContent = leftTries;

                alert(`You have lost!!!!!!!! The answer was ${guessingWord.toUpperCase()}!`);
                alert('Try again by refreshing.')
                lettersDiv.removeEventListener('click', handler)
            }
        }
    }
}
lettersDiv.addEventListener('click', handler);
