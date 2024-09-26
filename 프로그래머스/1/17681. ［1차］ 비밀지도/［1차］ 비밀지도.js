function solution(n, arr1, arr2) {
    var answer = [];
    
    // 1. 숫자를 이진수로 변환
    // 2. 각 자리수 중 둘 다 1이면 1 아니면 0
    // 3. 만들어진 배열을 1이면 # 아니면 ''으로 변환
    for (let i=0; i<n; i++){
        let map = arr1[i] | arr2[i]
        
        map = map.toString(2).padStart(n, 0)
        map = map.replaceAll('1', '#').replaceAll('0', ' ')
        
        answer.push(map)
    }
    
    return answer;
}