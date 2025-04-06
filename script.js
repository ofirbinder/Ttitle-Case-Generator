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
  ];
  const words = title
    .replace(/[.,#!$%\^&\*;:\\{}=_`~]/g, '')
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .split(' ');

  const results = words.map((word) => {
    const isFirstLetterSymble = /^[^a-zA-Z]/.test(word);

    if (isFirstLetterSymble) {
      const symble = word[0];
      return !lowercaseWords.includes(word.slice(1)) &&
        /^[a-zA-z]/.test(word.slice(1))
        ? symble + word[1].toUpperCase() + word.slice(2)
        : word;
    }

    return !lowercaseWords.includes(word) && /^[a-zA-z]/.test(word)
      ? word[0].toUpperCase() + word.slice(1)
      : word;
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
