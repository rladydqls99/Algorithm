def solution(myString, pat):
    strA = myString.replace('A', '*')
    
    result = strA.replace('B', 'A')
    result = result.replace('*', 'B')
    
    if result.find(pat) != -1:
        return 1
    
    return 0