def solution(l, r):
    result = []
    
    for num in range(l , r+ 1):
        num_str = str(num)
        if all(char in '05' for char in num_str):
            result.append(num)
    
    return sorted(result) if result else [-1]