function solution(n) {
    var answer = 0;
    const arr = [1, 2]
    
    if (n === 1) return 1
    if (n === 2) return 2
    
    for (let i=2; i<n; i++) {
        arr[i] = (arr[i-1] + arr[i-2]) % 1234567
    }
    
    return arr[arr.length-1];
}

