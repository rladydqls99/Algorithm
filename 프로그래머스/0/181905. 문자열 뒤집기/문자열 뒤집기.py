def solution(my_string, s, e):
    pre = my_string[:s]
    mid = my_string[s:e+1]
    suf = my_string[e+1:]
    
    reverse_mid = mid[::-1]
    return pre + reverse_mid + suf