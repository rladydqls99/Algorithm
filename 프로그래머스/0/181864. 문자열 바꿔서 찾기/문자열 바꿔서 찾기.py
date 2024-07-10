def solution(myString, pat):
    strA = myString.replace('A', '*')
    strB = strA.replace('B', '^')
    
    result = strB.replace('*', 'B')
    result = result.replace('^', 'A')
    
    if result.find(pat) != -1:
        return 1
    
    return 0