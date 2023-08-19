function solution(arr1, arr2) {
    var answer = [];
    let a = 0;
    for(let i=0; i<arr1.length; i++){
        answer.push(arr1[i].map((x,y) => arr1[i][y] + arr2[i][y]))
    }
    return answer;
}
