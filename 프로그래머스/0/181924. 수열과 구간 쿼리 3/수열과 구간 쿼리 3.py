def solution(arr, queries):
    
    for i in queries:
        beforeNum = arr[i[0]]
        arr[i[0]] = arr[i[1]]
        arr[i[1]] = beforeNum
    return arr