def solution(strArr):
    answer = []
    for i in strArr:
        ad_index = i.find('ad')
        
        if (ad_index == -1):
            answer.append(i)
    return answer