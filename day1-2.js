
str = '12131415';
len = str.length;
result = 0
str.split('').map((a, i) => {
  const b = i + len/2 >= len ? str[(i - len/2)] : str[i + len/2];
  result += Number(a === b ? a : 0);
});

console.log(result);