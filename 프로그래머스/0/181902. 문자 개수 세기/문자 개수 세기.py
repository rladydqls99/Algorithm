def solution(my_string):
    answer = []
    for i in range(65, 65+26):
        cnt = my_string.count(chr(i))
        answer.append(cnt)
    for i in range(97, 97+26):
        cnt = my_string.count(chr(i))
        answer.append(cnt)
        
    return answer