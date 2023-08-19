// 제일 작은 수 제거하기
function solution(arr) {
    var answer = [];
    var min = arr[0]
    // 배열에서 가장 작은 값 찾기
    for(let i=0; i<arr.length; i++){
        if(min > arr[i]){
            min = arr[i]
        }
    }
    
    // 가장 작은 값 필터링
    answer = arr.filter((element) =>element!== min)

    // 만약 배열이 비었을 경우 -1 삽입
    if (answer.length ===0){
        answer.push(-1)
    }
    return answer;
}