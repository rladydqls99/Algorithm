def solution(n):
    answer = []
    
    while True:
        if n == 1:
            answer.append(n)
            break
        
        answer.append(int(n))
        if n%2 ==0:
            n = n / 2
        else:
            n =  (3 * n) + 1
            
    return answer