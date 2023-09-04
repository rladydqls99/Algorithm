function solution(n, m, section) { 
    let cnt = 0;
    
    while (section.length > 0) {
        cnt++;  

        
        let startPaint = section[0];
        let endPaint = startPaint + m - 1;

        
        while (section[0] <= endPaint && section.length > 0) {
            section.shift();
        }
    }

    return cnt;
}
