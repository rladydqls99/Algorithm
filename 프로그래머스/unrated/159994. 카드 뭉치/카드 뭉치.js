//배열의 순서를 지키면서 goal을 만들어야 함
function solution(cards1, cards2, goal) {
    let cards1Arr = []
    let cards2Arr = []
    
    for(let i=0; i<goal.length; i++){
        let cards1Idx = cards1.indexOf(goal[i])
        if(cards1Idx !== -1){
            cards1Arr.push(cards1Idx)  
        } 
        let cards2Idx = cards2.indexOf(goal[i])
        if(cards2Idx !== -1){
            cards2Arr.push(cards2Idx)  
        } 
    }
    if(cards1Arr > cards2Arr.length){
        for(let j=0; j<cards1Arr.length; j++){
            if(cards1Arr[j] > cards1Arr[j+1]){
                return 'No'
            }
            if(j !== cards1Arr[j]){
                return 'No'
            }
            
        }
    }else{
        for(let j=0; j<cards2Arr.length; j++){
            if(cards1Arr[j] > cards1Arr[j+1]){
                return 'No'
            }
            if(cards2Arr[j] > cards2Arr[j+1]){
                return 'No'
            }
            
        }
    }
    if(cards1Arr.length > 1){
        for(let i=0; i<cards1Arr.length; i++){
            if(i !== cards1Arr[i]){
                return 'No'
            }
        }
    }
    
    return 'Yes';
}