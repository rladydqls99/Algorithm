const setTime = (diff, level, timeCur, timePrev) => {
    if (diff <= level) {
        return timeCur
    } else {
        const time = ((timeCur + timePrev) * (diff - level)) + timeCur
        return time
    }
    
}

function solution(diffs, times, limit) {
    let [minLev, maxLev] = [1, diffs.reduce((acc, cur) => Math.max(acc, cur), 1)]

    while (minLev < maxLev) {
        let midLev = Math.floor((minLev + maxLev) / 2)
        let midSum = 0
        
        for (let i=0; i<diffs.length; i++) {
            let prevTime = i === 0 ? 0 : times[i-1]
            const time = setTime(diffs[i], midLev, times[i], prevTime)
            midSum += time
        }
        if (midSum <= limit) {
            maxLev = midLev
        } else {
            minLev = midLev + 1
        }
    }
    return minLev;
}