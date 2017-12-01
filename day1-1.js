
str = '91212129';
result = 0
str.split('').map((a, i) => {
  const b = i === str.length -1 ? str[0] : str[i+1];
  result += Number(a === b ? a : 0);
});

console.log(result);