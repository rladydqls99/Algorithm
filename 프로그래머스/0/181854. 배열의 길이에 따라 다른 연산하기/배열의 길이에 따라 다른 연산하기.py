def solution(arr, n):
    answer = []
        
    if len(arr) % 2 == 0:
        for index, number  in enumerate(arr):
            if index % 2 != 0:
                answer.append(number + n)
            else:
                answer.append(number)
    else:
        for index, number in enumerate(arr):
            if index % 2 != 0:
                answer.append(number)
            else:
                answer.append(number + n)
            
    return answer