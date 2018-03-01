module.exports = function getZerosCount(number, base) {
  var res = 0;
  var tempArr = getMaxPrime(base);
  while (number) {
    number = (number / tempArr[0]) | 0;
    res += number;
  };
  res = res / tempArr[1];

  function getMaxPrime(x) {
    var j = 0;
    var i = 2;
    var a = [];
    var max = 0;
    var counter = 0;
    do {
      if (x % i == 0) {
        a[j] = i;
        j++;
        x = x / i;
      } else {
        i++;
      }
    }
    while (i < x);
    a[j] = i;
    max = getMaxOfArray(a);
    for (var i = 0; i < a.length; i++) {
      if ( a[i].includes(max) ) {
        counter++;
      }
    }
    return [max, counter]
  }

  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }

  return res;
}
