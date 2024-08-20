def solution(arr, flag):
    answer = []
    for i, f in enumerate(flag):
        if f:
            answer.extend([arr[i] for j in range(arr[i] * 2)])
        else:
            del answer[-arr[i]:]
            
            
    return answer