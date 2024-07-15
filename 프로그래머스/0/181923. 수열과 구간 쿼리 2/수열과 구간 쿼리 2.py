def solution(arr, queries):
    answer = []
    for s, e, k in queries:
        
        newArr = []
        for i in range(s, e+1):
            if (arr[i]) > k:
                newArr.append(arr[i])
        if len(newArr) == 0:
            answer.append(-1)
        else:
            minNum = min(newArr)
            answer.append(minNum)
    return answer