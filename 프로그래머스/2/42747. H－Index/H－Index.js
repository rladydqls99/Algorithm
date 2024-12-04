function solution(citations) {
    let hIndex = 0;
    
    let arr = citations.sort((a,b) => b-a)
    
    for (let i=0; i<arr.length; i++) {
        let num = 0
        arr[i] >= i+1 ? num = i+1 : num = arr[i]
        
        if (hIndex >= num) {
            return hIndex
        }
        hIndex = num
    }
    return hIndex;
    
}