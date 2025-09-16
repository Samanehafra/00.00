const text = "this is a test this is only a test this is fun";

const words = text.split(" ");
//"this" "is" "a"
const result = {};

words.forEach((word, index) => {
  if (!result[word]) {
    result[word] = [];
  }
  result[word].push(index);
});

console.log(result);

/*const even = words.filter((word, index) => index % 2 === 0);
console.log(even.join("  "));
const odd = words.filter((word, index) => index % 2 === 1);
console.log(.join("  "));
// question 1
function text(str) {
  const words = str.split(" ");
  const result = {};
  for (let w of words) {
    result[w] = (result[w] || 0) + 1;
  }
  return result;
}
console.log(text("this is a test this is only a test this is fun"));*/

// question 2
/*SgroupByLength(["cat", "dog", "bird", "lion", "tiger"]);
function groupByLength(arr) {
  const result = {};
  for (let word of arr) {
    const len = word.length;
    if (!result[len]) {
      result[len] = [];
    }
    result[len].push(word);
  }
  return result;
}
console.log(groupByLength(["cat", "dog", "bird", "lion", "tiger"]));
// question 3
function mostFrequent(arr) {
  let freq = {};
  let maxNum = null;
  let maxCount = 0;
  for (let num of arr) {
    if (!freq[num]) {
      freq[num] = 0;
    }
    freq[num]++;
    if (freq[num] > maxCount) {
      maxCount = freq[num];
      maxNum = num;
    }
  }
  return { number: maxNum, count: maxCount };
}
console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]));*/
