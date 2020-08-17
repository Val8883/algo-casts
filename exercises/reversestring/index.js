// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

function reverse2(str) {
  let newStr = '';
  for (let i = str.length; i > 0; i--) {
    newStr += str[i - 1];
  }
  return newStr;
}

function reverse3(str) {
  let reversed = '';
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

function reverse4(str) {
  return str.split('').reduce((acc, char) => char + acc, '');
}

module.exports = reverse4;
