function solution(sizes) {
    var answer = 0;
    let rest = 0;
    
    for(let i=0; i<sizes.length; i++){
        if(sizes[i][0] < sizes[i][1]){
            rest = sizes[i][0]
            sizes[i][0] = sizes[i][1]
            sizes[i][1] = rest
        }
    }
    let hMax= sizes[0][0]
    let wMax= sizes[0][1]
    for(let j=0; j<sizes.length; j++){
        if(hMax < sizes[j][0]){
            hMax = sizes[j][0]
        }
        if(wMax < sizes[j][1]){
            wMax = sizes[j][1]
        }
    }

    return hMax*wMax;
}