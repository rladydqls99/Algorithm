function solution(arr) {
    const sortedArr = arr.sort((a,b) => a-b)
    
    let lastNum = sortedArr[sortedArr.length -1]
    
    while (true) {
        let cnt = 0
        sortedArr.forEach(n => {
            if (lastNum % n === 0) {
                cnt +=1
            }
        })
        if (cnt === sortedArr.length) {
            return lastNum
        } else {
            lastNum += 1
        }
    }
}