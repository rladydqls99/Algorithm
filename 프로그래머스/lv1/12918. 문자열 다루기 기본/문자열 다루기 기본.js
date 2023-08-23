// 문자열 다루기
function solution(s) {
    let arr = []

    // 문자열 길이가 4이거나 6인 것 판별
    if(s.length === 4 || s.length === 6){
        s = s.split("")
    
        s.forEach((element) =>{
            // s 배열의 요소를 number로 바꾼뒤
            element = Number(element)
            // Not a Number가 아니면 arr 배열에 push
            if(!(isNaN(element))){
                arr.push(element)
            }
        })
    // s의 길이와 arr의 길이가 같으면 true
    if(s.length === arr.length){
        return true
    }
    }
    
    return false;
}