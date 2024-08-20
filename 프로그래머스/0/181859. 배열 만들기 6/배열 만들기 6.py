def solution(arr):
    answer = []
    i = 0
    
    while len(arr) > len(answer):
        if len(arr) <= i:
            return answer if len(answer) != 0 else [-1]
        
        if len(answer) == 0:
            answer.append(arr[i])
        else:
            if answer[-1] == arr[i]:
                answer.pop()
            else:
                answer.append(arr[i])
        i += 1
    return answer if len(answer) != 0 else [-1]