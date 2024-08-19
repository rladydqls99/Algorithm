def solution(myString):
    answer = sorted(myString.split('x'))
    
    for i, s in enumerate(answer):
        if s != '':
            return answer[i:]
            