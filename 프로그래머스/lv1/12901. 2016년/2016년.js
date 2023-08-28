function solution(a, b) {
  let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  let days = 0;
  let day = 0;

  // 자기 자신 이전 달의 일수를 모두 더하기
  for (let i = 0; i < a - 1; i++) {
    days += month[i];
  }

  // 요일 계산
  days += b - 1;
  day = days % 7;
  result = week[day];
  return result;
}
