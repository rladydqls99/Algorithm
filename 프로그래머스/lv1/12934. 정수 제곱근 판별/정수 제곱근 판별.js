function solution(n) {
  let x = Math.sqrt(n);
  // n이 양의 정수 x의 제곱 ? (x + 1)^2  :  -1

  return Number.isInteger(x) === true ? (x + 1) ** 2 : -1;

  // 제곱근이 정수인지 확인 Number.isInteger()
}
