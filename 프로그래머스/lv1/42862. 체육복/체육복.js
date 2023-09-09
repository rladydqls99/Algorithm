function solution(n, lost, reserve) {
    // 반복문을 돌기 전에 lost = reserve인 값들을 제거해 줘야함
    // 이유는 반복문은 순서대로 돌기 때문에 다른 조건문이 먼저 실행될 가능성이 있기 때문
    newLost = lost.filter(item => !reserve.includes(item));
    newReserve = reserve.filter(item => !lost.includes(item));
    
    newLost = newLost.sort((comp1, comp2) =>comp1 - comp2)
    
    newLost.forEach((item) => {
        if(newReserve.includes(item-1)){
            let idx = newReserve.indexOf(item-1)
            newReserve.splice(idx,1)    
        }
        else if(newReserve.includes(item+1)){
            let idx = newReserve.indexOf(item+1)
            newReserve.splice(idx,1)
        }else{
            n -= 1
        }
    })
    
    return n;
}
