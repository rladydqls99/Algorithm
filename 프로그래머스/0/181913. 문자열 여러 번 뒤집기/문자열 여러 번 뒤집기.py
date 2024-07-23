def solution(my_string, queries):
    my_list = list(my_string)
    
    for query in queries:
        front_list = my_list[:query[0]]
        middle_list = my_list[query[0]: query[1] + 1]
        back_list = my_list[query[1] + 1:]
        
        middle_list.reverse()
        
        my_list = front_list + middle_list + back_list
        
    return ''.join(my_list)