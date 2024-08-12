def solution(arr):
    answer = 0
    original = arr[:]
    while True:
        for index, num in enumerate(arr):
            if num >= 50 and num%2 == 0:
                arr[index] = num / 2
            elif num < 50 and num%2 != 0:
                 arr[index] = (num * 2) + 1

        if arr == original:
            return answer
        else:
            answer += 1
            original = arr[:]