'use strict';

const titleCase = (title) => {
  const lowercaseWords = [
    'a',
    'an',
    'and',
    'as',
    'at',
    'but',
    'by',
    'for',
    'from',
    'in',
    'nor',
    'of',
    'on',
    'or',
    'so',
    'the',
    'to',
    'up',
    'yet',
    'if',
    'addition',
    'will',
    'be',
    'although',
    'because',
    'before',
    'even',
    'however',
    'since',
    'though',
    'unless',
    'until',
    'when',
    'where',
    'while',
    'whether',
    'after',
    'although',
    'as',
    'because',
    'before',
    'even',
    'if',
    'once',
    'since',
    'though',
    'till',
    'unless',
    'until',
    'when',
    'whenever',
    'where',
    'wherever',
    'while',
    'whether',
    'yet',
  ];

  const words = title
    .replace(/[,#$%\^;{}`~]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/.$/g, '')
    .replace(/\breq\b/gi, 'REQ')
    .split(' ');

  const results = words.map((word, i) => {
    const isFirstLetterSymble = /^[^a-zA-Z]/.test(word);

    if (isFirstLetterSymble) {
      const symble = i === 0 ? '' : word[0];
      return !lowercaseWords.includes(word.slice(1).toLowerCase()) &&
        /^[a-zA-z]/.test(word.slice(1))
        ? symble + word[1].toUpperCase() + word.slice(2)
        : i === 0
        ? symble + word[1].toUpperCase() + word.slice(2)
        : word;
    }
    return !lowercaseWords.includes(word.toLowerCase()) &&
      /^[a-zA-z]/.test(word)
      ? word[0].toUpperCase() + word.slice(1)
      : i === 0
      ? word[0].toUpperCase() + word.slice(1)
      : word.toLowerCase();
  });

  return results.join(' ');
};

// Handler for RUN button
document.querySelector('#runButton').addEventListener('click', (event) => {
  event.preventDefault();
  const titleInput = document.querySelector('.input__text');
  const result = titleCase(titleInput.value);
  document.querySelector('.input__res').value = result;
});

// Handler for CLEAR button
document.querySelector('#clearButton').addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('.input__text').value = '';
  document.querySelector('.input__res').value = '';
});

// Handler for COPYTOCLIPBOARD button
document.querySelector('#CopyButton').addEventListener('click', (event) => {
  event.preventDefault();
  const text = document.querySelector('.input__res').value;
  navigator.clipboard.writeText(text);

  // Show the 'Copied' message
  const copyButton = document.querySelector('.BtnCPY');
  copyButton.classList.add('show');

  // Hide the 'Copied' message after 3 seconds
  setTimeout(() => {
    copyButton.classList.remove('show');
  }, 750);
});
