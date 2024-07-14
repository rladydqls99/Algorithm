def solution(code):
    answer = ''
    mode = 0
    
    for i in range(len(code)):
        if code[i] == "1":
            if mode == 1:
                mode = 0
            else:
                mode = 1
            continue
            
        if mode == 0 and i%2 == 0:
            answer += code[i]     
        if mode == 1 and i%2 != 0:
            answer += code[i]     
    return answer if answer != '' else 'EMPTY'