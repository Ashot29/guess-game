const body = document.body;

function elemMaker(tagName, parent, classList, content = '') {
    let elem = document.createElement(`${tagName}`);
    for (let i = 0; i < classList.length; i++) {
        elem.classList.add(classList[i])
    };
    elem.textContent = content;
    parent.append(elem);
    return elem
}

// Main content
const mainDiv = elemMaker('div', body, ['main']);
const questionDiv = elemMaker('div', mainDiv, ['question'], question);

// Letters
const lettersDiv = elemMaker('div', mainDiv, ['letters']);
for (let i = 0; i < alphabet.length; i++) {
    let button = elemMaker('button', lettersDiv, ['letter_button'], alphabet[i]);
    button.value = alphabet[i]
}

// Answer
const answerDiv = elemMaker('div', mainDiv, ['answer']);
for (let i = 0; i < wordArray.length; i++) {
    let answerLetter = elemMaker('div', answerDiv, ['answer_letter', `letter_${i}`]);
    let letter = elemMaker('span', answerLetter, ['letter'], wordArray[i]);
    letter.dataset.value = wordArray[i]
}

// Tries
const tryDiv = elemMaker('div', mainDiv, ['tries'], 'Tries count.');
const triesCount = elemMaker('div', tryDiv, ['tries_count'], leftTries);