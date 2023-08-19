function solution(numbers) {
    var answer = 0
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var diff = []

    diff = arr.filter((element) => !numbers.includes(element))
    
    diff.forEach((a) =>{
        answer += Number(a)
    })
    
    return answer

}