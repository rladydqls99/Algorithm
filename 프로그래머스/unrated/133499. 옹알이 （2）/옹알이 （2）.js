function solution(babbling) {
    var answer = 0;
    let pro = ["aya", "ye", "woo", "ma"]
    
    for(let i = 0; i < babbling.length; i++){
        // Step 1: Replace known pronunciations with unique characters
        babbling[i] = babbling[i]
            .replace(new RegExp(pro[0], 'g'), "A")
            .replace(new RegExp(pro[1], 'g'), "B")
            .replace(new RegExp(pro[2], 'g'), "C")
            .replace(new RegExp(pro[3], 'g'), "D");
        
        // Step 2: Use a regex to find repeating characters
        let hasRepeated = /([ABCD])\1/.test(babbling[i]);

        // Step 3: Check if there are any characters other than A, B, C, D
        let hasOtherChars = /[^ABCD]/.test(babbling[i]);

        // Increment the answer if there are no repeating characters and no other characters
        if(!hasRepeated && !hasOtherChars){
            answer++;
        }
    }
    return answer;
}
