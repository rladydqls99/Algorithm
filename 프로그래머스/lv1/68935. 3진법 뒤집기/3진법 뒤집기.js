// 3진법 뒤집기
function solution(n) {
    let numArr =  [];
    let sum = 0;
    while(n>0){
        numArr.unshift(n%3)
        n = Math.floor(n/3)
        console.log(n)
        console.log(numArr)
        if(n === 1){
            numArr.unshift(1)
            break
        }
    }

    console.log(numArr)
    for(let i=0; i<numArr.length; i++){
        sum += (3**i)* numArr[i]
    }
    return sum
}

console.log(solution(99999999))