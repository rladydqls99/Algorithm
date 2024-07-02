def solution(num_list):
    multiply = 1
    add = 0
    
    for i in num_list:
        multiply *= i
        add += i
        
    if multiply > add**2:
        return 0
    
    return 1