def solution(arr):
    answer = []
    
    for index, num in enumerate(arr):
        if num == 2:
            answer.append(index)
    if len(answer) == 0:
        return [-1]
    elif len(answer) == 1:
        return [2]
    else:
        return arr[answer[0]: answer[-1]+1]
    