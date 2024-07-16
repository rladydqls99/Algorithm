def solution(arr, queries):
    for s, e, k in queries:
        indexArr = [i for i in range(s, e+1)]
        for index in indexArr:
            if index % k == 0:
                arr[index] += 1
    return arr