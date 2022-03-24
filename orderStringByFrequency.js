function orderStringByFrequency(string) {
    let frequentObj = {};
    let stringArray = string.split(' ');
    stringArray.forEach(word => frequentObj[word] ? frequentObj[word]++ : frequentObj[word] = 1);
    let keyVals = Object.entries(frequentObj);
    let sortedNestedArray = keyVals.sort((a, b) => a[1] - b[1]);
    let flattenedArray = sortedNestedArray.map((arr) => arr[0]);
    let resultArray = flattenedArray.reverse();
    let resultString = flattenedArray.join(' ');
    return resultString;
  }

  console.log(orderStringByFrequency("hello my hello name is this hello is my my"));