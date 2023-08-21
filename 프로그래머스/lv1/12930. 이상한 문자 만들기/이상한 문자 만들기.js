function solution(s) {
    s = s.toLowerCase();
    var answer = '';

    // Split the string into words
    let words = s.split(" ");

    // Iterate over each word
    for (let i = 0; i < words.length; i++) {
        let word = "";
        for (let j = 0; j < words[i].length; j++) {
            // If the index is even, convert the character to uppercase.
            // Otherwise, keep it lowercase.
            if (j % 2 === 0) {
                word += words[i][j].toUpperCase();
            } else {
                word += words[i][j];
            }
        }
        // If it's not the last word, add a space after it
        answer += (i < words.length - 1) ? (word + " ") : word;
    }

    return answer;
}
