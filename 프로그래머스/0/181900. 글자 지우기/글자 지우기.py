def solution(my_string, indices):
    my_string_arr = list(my_string)
    
    for i in indices:
        my_string_arr[i] = '*'
        
    result = ''.join(my_string_arr)   
    
    return result.replace('*', '')