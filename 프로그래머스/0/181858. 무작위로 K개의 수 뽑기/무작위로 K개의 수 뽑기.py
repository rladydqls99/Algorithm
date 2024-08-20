def solution(arr, k):
    answer = [-1 for _ in range(k)]
    index = 0
    
    for i in arr:
        try:
            if i not in answer:
                answer[index] = i
                index += 1
        except:
            break
    return answer