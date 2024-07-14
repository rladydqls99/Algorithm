def solution(a, b):
    answer = 0
    
    sumA = int(str(a) + str(b))
    sumB = 2 * a * b
    
    return sumA if sumA >= sumB else sumB