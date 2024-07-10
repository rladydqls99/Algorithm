def solution(myString):
    answer = ""
    for i in myString:
        if ord(i) < 95:
            i = ord(i) + 32
            answer += str(chr(i))
        else:
            answer += i

    return answer