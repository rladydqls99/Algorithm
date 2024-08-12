def solution(myString, pat):
    lower_myString = myString.lower()
    lower_pat = pat.lower()
    
    return 1 if lower_myString.count(lower_pat) else 0