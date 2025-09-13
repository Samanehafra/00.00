const text = "this is a test this is only a test this is fun";

const words = text.split(" ");

const result = {};

words.forEach((word, index) => {
  if (!result[word]) {
    result[word] = [];
  }
  result[word].push(index);
});

console.log(result);
