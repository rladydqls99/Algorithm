def solution(numbers, n):
    answer = 0
    index = 0
    while answer <= n:
        answer += numbers[index]
        print(numbers[index])
        index += 1
        
        if index == len(numbers):
            index = 0
        
    return answer