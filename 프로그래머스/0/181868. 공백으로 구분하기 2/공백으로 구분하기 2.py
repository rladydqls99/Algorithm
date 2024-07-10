def solution(my_string):
    answer = []
    str = ''
    
    for i in range(len(my_string)):
        if my_string[i] == ' ':
            if str != '':
                answer.append(str)
                str = ''
        else:
            str += my_string[i]
    
    if str != '':
        answer.append(str)
        
    return answer