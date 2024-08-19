def solution(myStr):
    answer = myStr.replace('a', '*').replace('b', '*').replace('c', '*')
    
    return " ".join(answer.split('*')).split() or ['EMPTY']