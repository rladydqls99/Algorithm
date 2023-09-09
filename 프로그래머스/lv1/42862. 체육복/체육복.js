function solution(n, lost, reserve) {
    
    // Handle students who have lost their extra gym uniforms first
    let realLost = lost.filter(student => !reserve.includes(student));
    let realReserve = reserve.filter(student => !lost.includes(student));
    
    realLost.sort((a, b) => a - b);
    
    realLost.forEach((item) => {
        if(realReserve.includes(item - 1)) {
            let idx = realReserve.indexOf(item - 1);
            realReserve.splice(idx, 1);
        } else if(realReserve.includes(item + 1)) {
            let idx = realReserve.indexOf(item + 1);
            realReserve.splice(idx, 1);
        } else {
            n -= 1;
        }
    });

    return n;
}
