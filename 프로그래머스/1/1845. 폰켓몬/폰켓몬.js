function solution(nums) {
    let map = new Map()
    let getPoketMon =nums.length/2
    
    nums.forEach(num => {
        map.set(num, (map.get(num) || 0)+1)
    })
    if(map.size <= getPoketMon) return map.size
    
    return getPoketMon;
}