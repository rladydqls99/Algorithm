def solution(number, n, m):
    restN = number % n
    restM = number % m
    
    return 1 if restN == 0 and restM == 0 else 0