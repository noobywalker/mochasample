module.exports = function gcd (a, b) {
  // var answer;
  // for (var i = 1; i <= a && i <= b; i++) {
  //   if (a % i === 0 && b % i === 0) {
  //     answer = i;
  //   }
  // }
  // return answer;

  //  refactor code
  if (b === 0) return a;
  return gcd(b, a % b);
};
