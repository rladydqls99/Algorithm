def solution(myString, pat):
    answer = 0
    len_pat = len(pat)
    for i in range(len(myString)):
        s = myString[i: len_pat]
        len_pat += 1
        if s == pat:
            answer += 1
            
    return answer