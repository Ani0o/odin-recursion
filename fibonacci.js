function fibs(num) {
  let res = [];
  if (num === 0) return [];
  else if (num === 1) return [0];

  res.push(0);
  res.push(1);
  for (let i = 1; i < num - 1; i++) {
    res.push(res[i - 1] + res[i]);
  }

  return res;
}

console.log(fibs(8));

function fibsRec(num, index = 0, res = [0]) {
  console.log("This was printed recursively");

  if (num === 0) return [];
  if (index === num - 1) return res;
  res.push(res[index] + (res[index - 1] ?? 1));
  return fibsRec(num, index + 1, res)
}

console.log(fibsRec(8));
