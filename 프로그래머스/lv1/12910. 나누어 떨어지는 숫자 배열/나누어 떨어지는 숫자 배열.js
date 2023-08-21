// 나누어 떨어지는 숫자 배열
// https://school.programmers.co.kr/learn/courses/30/lessons/12910

// 새로운 배열 newarr 만들기
function solution(arr, divisor) {
let newArr = []
// arr를 for문 돌면서 divisor로 나누고, 나눠지는 수는 새로운 배열에 넣기
for(let i=0; i<arr.length; i++){
    if(arr[i] % divisor === 0){
        newArr.push(arr[i])
    }
}
// 새로운 배열이 내용이 없다면, 배열에 -1 담아서 출력하기
if(newArr.length === 0){
    newArr.push(-1)
}
// 출력할 때 오름차순으로 정렬하기
newArr = newArr.sort(function(comp1, comp2){
    return comp1 - comp2
})
return newArr
}