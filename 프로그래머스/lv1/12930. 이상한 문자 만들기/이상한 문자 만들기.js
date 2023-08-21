// 이상한 문자열 만들기
function solution(s) {
    // s를 소문자로 먼저 변환
    s = s.toLowerCase();
    var answer = '';

    // s를 공백으로 나눈 변수 words 생성
    let words = s.split(" ");

    // words 길이만큼 반복
    for (let i = 0; i < words.length; i++) {
        // 개별 단어를 저장할 word 생성
        let word = "";
        // words의 개별 단어의 길이만큼 반복
        for (let j = 0; j < words[i].length; j++) {
            // 인덱스가 짝수라면 대문자로 변환해서 word에 저장
            if (j % 2 === 0) {
                word += words[i][j].toUpperCase();
            // 그렇지 않으면 그대로 word에 저장
            } else {
                word += words[i][j];
            }
        }
        // words의 마지막 문자가 아닐 대 word + 공백, 아니면 그냥 word를 더함
        answer += (i < words.length - 1) ? (word + " ") : word;
    }

    return answer;
}
