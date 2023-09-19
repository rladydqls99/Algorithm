function solution(wallpaper) {
  const rows = wallpaper.length;
  const cols = wallpaper[0].length;

  let minX = cols; // 초기화
  let maxX = -1; // 초기화
  let minY = rows; // 초기화
  let maxY = -1; // 초기화

  // 파일이 있는 영역을 찾습니다.
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (wallpaper[i][j] === '#') {
        minX = Math.min(minX, j);
        maxX = Math.max(maxX, j);
        minY = Math.min(minY, i);
        maxY = Math.max(maxY, i);
      }
    }
  }

  // 파일이 없으면 아무런 작업을 하지 않습니다.
  if (minX === cols || minY === rows) {
    return [0, 0, 0, 0]; // 아무 작업도 안했으므로 [0, 0, 0, 0] 반환
  }

  // 드래그 한 거리를 계산합니다.
  const distance = [minY, minX, maxY+1, maxX+1];

  return distance;
}

