function solution(phone_number) {
    let frontNum = phone_number.slice(0, -4)
    frontNum = '*'.repeat(frontNum.length)
    backNum = phone_number.substr(-4)

    return frontNum + backNum
}