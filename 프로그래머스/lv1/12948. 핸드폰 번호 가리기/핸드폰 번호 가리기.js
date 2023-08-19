function solution(phone_number) {
    var answer = '';
    var fNum = phone_number.slice(0, -4).replace(/[0-9]/gi, "*")
    var bNum = phone_number.substr(-4)
    
    answer = fNum + bNum
    return answer;
}