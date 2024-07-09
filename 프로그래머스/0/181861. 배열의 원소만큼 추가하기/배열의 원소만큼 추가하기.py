def solution(arr):
    answer = []
    for number in arr:
        for j in range(number):
            answer.append(number)
    return answer