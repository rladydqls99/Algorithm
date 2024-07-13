from functools import reduce

def solution(num_list):
    length = len(num_list)
    
    if length > 10:
        return sum(num_list)
    else:
        return reduce(lambda x, y: x * y, num_list)