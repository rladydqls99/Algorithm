def solution(s):
    numbers='0123456789'
    answer = s.split(' ')
    
    for i, v in enumerate(answer):
        if (v == ''):
            continue
        if (v[0] in numbers) :
            answer[i] = v.lower()
            
        answer[i] = v.capitalize()
        
    
    return ' '.join(answer)