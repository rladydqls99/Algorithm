function solution(n) {
  // n을 문자로 형변환 한 후 , split('')으로 쪼개준다
  n = String(n).split('').sort().reverse().join('');
  n = Number(n);
  // sort로 정렬해 주면서  > join > 숫자로 다시 형변환
  console.log(n);
  return n;
}
