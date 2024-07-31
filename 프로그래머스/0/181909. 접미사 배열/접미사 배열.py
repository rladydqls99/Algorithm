def solution(my_string):
    answer = []
    
    for i in range(len(my_string)):
        answer.append(my_string)
        my_string = my_string[1:]

    answer.sort() 
    return answer