function solution(s) {
  // 짝수일 경우 - [s의 길이 / 2 -1] , [s의 길이] return
  // 홀수일 경우 - Math.floor[s의 길이 / 2 ] 번째 글자 return
  let idx = 0
  if(s.length % 2 === 0){
    idx = s.length / 2
    return s.substr(idx-1, 2)
  }else{
    idx = Math.floor(s.length/2)
    return s.substr(idx,1)
  }
}