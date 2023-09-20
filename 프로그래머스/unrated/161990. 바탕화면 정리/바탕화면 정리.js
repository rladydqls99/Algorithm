// 1. array[i]에서 #이 가장 먼저 나오는 줄이 result[0]
// 2. array[i][j] 중 j 최소값이 result[1]
// 3. array[i]에서 #이 가장 마지막에 나오는 줄이 result[2]
// 4. array[i][j] 중 j 최대값이 result[3]

function solution(wallpaper) {
    var answer = [];
    let lux = wallpaper.length
    let rdx = 0
    let luy = wallpaper[0].length
    let rdy = 0
    for(let i=0; i<wallpaper.length; i++){
        if(wallpaper[i].includes('#') && i < lux){
            lux = i
        }
        if(wallpaper[i].includes('#') && i >= rdx){
            rdx = i
        }
        if(wallpaper[i].includes('#') && wallpaper[i].indexOf('#') <luy){
            luy = wallpaper[i].indexOf('#')
        }
        let maxRdy = 0
        for(let j=0; j<wallpaper[i].length; j++){
            if(wallpaper[i][j] === '#' && j >= maxRdy){
                maxRdy = j
            }
            if(maxRdy > rdy){
            rdy = maxRdy
            }
        }
    }
    answer.push(lux)
    answer.push(luy)
    answer.push(rdx+1)
    answer.push(rdy+1)
    
    return answer;
}