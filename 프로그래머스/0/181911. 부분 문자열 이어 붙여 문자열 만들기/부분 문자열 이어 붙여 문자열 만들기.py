def solution(my_strings, parts):
    answer = ''
    
    for index, my_string in enumerate(my_strings):
        start, end = parts[index]
        answer += my_string[start: end + 1]
    return answer