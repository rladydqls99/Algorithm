def solution(a, b, c, d):
    numberArr = [a, b, c, d]
    numberSet = set(numberArr)
    
    maxNumber = max(numberSet, key=numberArr.count)
    minNumber = min(numberSet, key=numberArr.count)
    
    if len(numberSet) == 1:
        return 1111 * maxNumber
    elif len(numberSet) == 2:
        newList = list(numberSet)
        if numberArr.count(a) == 3 or numberArr.count(b) == 3 :
            return (10 * maxNumber + minNumber)**2
        else:
            return (newList[0] + newList[1]) * abs(newList[0] - newList[1])
    elif len(numberSet) == 3:
        numberSet.remove(maxNumber)
        newList = list(numberSet)
        return newList[0] * newList[1]
    else:
        return min(numberSet)