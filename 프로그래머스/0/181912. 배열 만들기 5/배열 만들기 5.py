def solution(intStrs, k, s, l):
    answer = []
    
    for num in intStrs:
        sliced_num = num[s: s+l]
        
        if int(sliced_num) > k:
            answer.append(int(sliced_num))
    return answer