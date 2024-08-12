def solution(myString, pat):
    reverse = myString[::-1]
    reverse_pat = pat[::-1]
    
    index = reverse.find(reverse_pat)
    return myString[:-index] if index != 0 else myString