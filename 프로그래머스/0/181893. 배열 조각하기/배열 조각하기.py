def solution(arr, query):
    for index, q in enumerate(query):
        if index % 2 == 0:
            arr = arr[:q+1]
        else:
            arr = arr[q:]
    return arr