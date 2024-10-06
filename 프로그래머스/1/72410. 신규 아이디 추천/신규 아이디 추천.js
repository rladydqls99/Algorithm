function solution(new_id) {
    // Step 1: Convert to lowercase
    let answer = new_id.toLowerCase();

    // Step 2: Remove invalid characters
    const reg = /[^a-z0-9-._]/g;
    answer = answer.replace(reg, '');

    // Step 3: Replace consecutive periods with a single period
    answer = answer.replace(/\.{2,}/g, '.');

    // Step 4: Remove periods at the start or end of the string
    answer = answer.replace(/^\.|\.$/g, '');

    // Step 5: If empty, set to "a"
    if (answer === '') {
        answer = 'a';
    }

    // Step 6: Trim the string to a maximum length of 15 and remove trailing periods
    if (answer.length > 15) {
        answer = answer.slice(0, 15);
        answer = answer.replace(/\.$/, '');  // Remove trailing period if present
    }

    // Step 7: If length is less than 3, pad with the last character
    if (answer.length < 3) {
        answer = answer.padEnd(3, answer[answer.length - 1]);
    }

    return answer;
}
