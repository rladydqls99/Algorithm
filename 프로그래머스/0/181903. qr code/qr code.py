def solution(q, r, code):
    answer = ''
    for (index, str) in enumerate(code):
        if index % q == r:
            answer += str
    return answer