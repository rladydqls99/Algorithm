def solution(binomial):
    arr = binomial.split(' ')
    
    if arr[1] == '+':
        return int(arr[0]) + int(arr[2])
    if arr[1] == '-':
        return int(arr[0]) - int(arr[2])
    if arr[1] == '*':
        return int(arr[0]) * int(arr[2])