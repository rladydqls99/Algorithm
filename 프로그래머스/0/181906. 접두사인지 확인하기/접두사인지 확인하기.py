def solution(my_string, is_prefix):
    prefix_len = len(is_prefix)
    return 1 if my_string[:prefix_len] == is_prefix else 0