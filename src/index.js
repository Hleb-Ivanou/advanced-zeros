module.exports = function getZerosCount(number, base) {
  var res = 0;
  while (number) {
    number = (number / getMaxPrime(base)) | 0;
    res += number;
  };

  function getMaxPrime(x) {
    var j = 0;
    var i = 2;
    var a = [];
    var max = 0;
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
    return max
  }

  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }

  return res;
}
