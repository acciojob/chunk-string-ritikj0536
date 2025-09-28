function stringChop(str, size) {
  if (size <= 0) return []; // edge case

  let result = [];
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }
  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."));
alert(stringChop(str, size));
