function solution(n) {
  // n이 홀수일 때 수/박/ 짝수일때 수박
  const wM = n%2===0 ? "수박": "수박"
    
  // n을 2로 나눠 주고 나머지가 있으면 '수' 를 더해주기
  let answer = n%2===0 ? wM.repeat(n/2) : wM.repeat(n/2) + "수"
  
  return answer;
}