function solution(n) {
    var answer = 0;
    // 에라토스테네스의 채
    for(let i=0; i<=n; i++){
        const prime = isPrime(i)
        if (prime) answer +=1
    }
    return answer;
}

function isPrime(num){
    if(num < 2) return false
  	
    if(num % 2 ===0) return num === 2? true : false
  
    for(let i = 3; i <= parseInt(Math.sqrt(num)) ; i+=2){
        if(num % i ===0){
        	return false
        }
    }
  	return true
}