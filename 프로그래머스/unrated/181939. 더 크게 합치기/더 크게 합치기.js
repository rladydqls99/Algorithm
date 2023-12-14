function solution(a, b) {
    let first = (a+"") + (b+"")
    let second = (b+"") + (a+"")
    if(first < second) return +second
    return +first
}