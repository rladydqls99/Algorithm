def solution(my_string, is_suffix):
    suffix_len = len(is_suffix)
    my_string = my_string[-suffix_len:]        
        
    return 1 if my_string == is_suffix else 0