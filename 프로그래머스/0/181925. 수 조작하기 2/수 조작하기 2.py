def solution(numLog):
    answer = ''
    dict = {1: 'w', -1: 's', 10: 'd', -10: 'a'}
    
    for i in range(1, len(numLog)):
        number = numLog[i] - numLog[i-1]
        answer += dict[number]
    return answer