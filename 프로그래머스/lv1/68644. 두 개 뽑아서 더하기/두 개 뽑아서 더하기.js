function solution(numbers) {
    var answer = [];
    let set = new Set()
    for(let i=0; i<numbers.length; i++){
        let fixed = numbers[i]
        for(let j=i+1; j<numbers.length; j++){
            let sum = fixed + numbers[j]
            set.add(sum)
        }
    }
    answer = [...set].sort((comp1, comp2) => comp1 - comp2)
    return answer;
}