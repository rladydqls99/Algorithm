def solution(num_list):
    lastNum = num_list[-1]
    otherNum = num_list[-2]
    
    if lastNum > otherNum:
        num_list.append(lastNum - otherNum)
    else:
        num_list.append(lastNum * 2)
    return num_list