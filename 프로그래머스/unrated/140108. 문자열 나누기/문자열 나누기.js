function solution(s) {
    var answer = 0;
    // 1. 첫 번째 글자와 같은 글자를 담는 배열 생성
    let arr1 = []
    // 2. 첫 번째 글자와 다른 글자를 담는 배열 생성
    let arr2 = []
    let j = 0
    for(let i=0; i<s.length; i++){
        let first = s[0 +j]  
        if(first === s[i]){
            arr1.push(s[i])
        }else{
            arr2.push(s[i])
        }
        // 3. 비교해서 길이가 같으면 answer +1 후 배열초기화
        // 4. 비교해서 다르면 다음 반복문 진행
        if(arr1.length === arr2.length){
            answer += 1
            j = i +1
            arr1 = []
            arr2 = []
        }
    }
    if(arr1.length !==0){
        answer += 1
    }
    return answer;
}