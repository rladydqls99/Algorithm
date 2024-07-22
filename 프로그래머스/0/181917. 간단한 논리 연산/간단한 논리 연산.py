def solution(x1, x2, x3, x4):
    answer = True
    first = True
    second = True
    
    if x1 or x2:
        first = True
    else:
        first = False
    if x3 or x4:
        second = True
    else:
        second = False
    if first and second:
        answer = True
    else:
        answer = False
    
        
    return answer