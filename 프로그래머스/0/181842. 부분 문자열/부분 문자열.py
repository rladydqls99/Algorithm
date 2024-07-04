def solution(str1, str2):
    answer = str2.find(str1)
    
    if answer == -1:
        return 0
    return 1