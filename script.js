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
    'shall',
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
    'with',
    'whether',
    'yet',
  ];

  const words = title
    .replace(/[,#$\^{}`~]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/\.$/g, '')
    .replace(/\breq\b/gi, 'REQ')
    .split(' ');

  const results = words.map((word, i) => {
    console.log(word);
    const isFirstLetterSymble = /^[^a-zA-Z]/.test(word);
    word = isFirstLetterSymble && i === 0 ? word.slice(1) : word;
    if (i === 0 && lowercaseWords.includes(word.toLowerCase()))
      return word[0].toUpperCase() + word.slice(1);

    if (isFirstLetterSymble && /^[a-zA-Z]/.test(word.slice(1))) {
      const symble = word[0];

      return lowercaseWords.includes(word.slice(1).toLowerCase())
        ? symble + word.slice(1).toLowerCase()
        : symble + word[1].toUpperCase() + word.slice(2);
    }

    return lowercaseWords.includes(word.toLowerCase())
      ? word.toLowerCase()
      : word[0].toUpperCase() + word.slice(1);
  });

  return results.join(' ');
};

// Handler for RUN button
document.querySelector('#runButton').addEventListener('click', (event) => {
  event.preventDefault();
  const titleInput = document.querySelector('.input__text').value;

  if (!titleInput) return;
  const result = titleCase(titleInput);
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
  const titleInput = document.querySelector('.input__res').value;

  if (!titleInput) return;
  navigator.clipboard.writeText(titleInput);

  // Show the 'Copied' message
  const copyButton = document.querySelector('.BtnCPY');
  copyButton.classList.add('show');

  // Hide the 'Copied' message after 3 seconds
  setTimeout(() => {
    copyButton.classList.remove('show');
  }, 2000);
});
