function solution(nums) {
    let result = 0
    
    for(let i=0; i<nums.length; i++){
        let sum = 0
        let fiexd1 = nums[i]
       
        
        for(let j=i+1; j<nums.length; j++){
            let fiexd2 = nums[j]
        
            for(let k=j+1; k<nums.length; k++){
                let fiexd3 = nums[k]
                sum = fiexd1 + fiexd2 + fiexd3
                let a = []
                for(let l=1; l<sum+1; l++){
                    if(sum%l ===0){
                        a.push(l)
                    }
                }
                if(a.length === 2){
                    result++
                }
            }
        }
    }
    
    return result;
}