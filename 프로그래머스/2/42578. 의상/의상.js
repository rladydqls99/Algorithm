function solution(clothes) {
    var answer = 1;
    let clothesMap = new Map()
    
    clothes.forEach(clothe =>{
        clothesMap.set(clothe[1], (clothesMap.get(clothe[1]) || 0) + 1)
    })
    
    for(let clothe of clothesMap.values()) {
        answer *= clothe +1
    }
     
   
    return answer-1 ;
}