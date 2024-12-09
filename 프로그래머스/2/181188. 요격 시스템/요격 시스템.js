function solution(targets) {
    let answer = 1;
    
    const arr = targets.sort((a,b) => a[0] - b[0])
    let [initS, initE] = arr[0]
    console.log(arr)
    for (let i=1; i<arr.length; i++) {
        const [start, end] = arr[i]
        
        if (initE <= start) {
            initS = arr[i][0]
            initE = arr[i][1]
            answer += 1
        }
        if (initE > end) {
            initE = end
        }
    }
    
    return answer;
}