// 약수의 개수와 덧셈
// https://school.programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  // 모든 합을 저장할 sum 변수
  let sum = 0;
  // for 반복문 사용, left ~ right 사이 숫자에 대한 반복문
  for (left; left < right+1; left++) {
    // 약수 갯수 저장할 cnt 변수
    let cnt = 0;
    for (let j = 0; j < left+1; j++) {
      // for 반복문 사용, 1부터 현재 숫자까지
      // j가 i의 약수이면 약수 갯수 ++
      if (left % j === 0) {
        cnt++;
      }
    }
    // 약수 갯수가 홀수면 sum에 뺌
    // 약수 갯수가 짝수면 sum에 더함
    if (cnt % 2 === 0) {
      sum += left;
    } else {
      sum -= left;
    }
  }
  return sum;
}
