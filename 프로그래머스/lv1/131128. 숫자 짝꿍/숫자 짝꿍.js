function solution(X, Y) {
    var answer = '';
    let arrX = [];
    let arrY = [];
    let commonDigits = [];
    
    // Find the digits present in both X and Y
    for(let i = 0; i < 10; i++) {
        const regex = new RegExp(`${i}`, 'g');
        if(X.match(regex) !== null && Y.match(regex) !== null) {
            commonDigits.push(i);
        }
    }

    // If no common digits or only 0 is common
    if (commonDigits.length === 0) {
        return "-1";
    }
    if (commonDigits.length === 1 && commonDigits[0] === 0) {
        return "0";
    }

    // Sort the digits in descending order to create the largest number
    commonDigits.sort((a, b) => b - a);

    // Create the largest number possible from the common digits
    for (let i = 0; i < commonDigits.length; i++) {
        if (commonDigits[i] !== 0) {
            answer += commonDigits[i].toString().repeat(Math.min(X.match(new RegExp(`${commonDigits[i]}`, 'g')).length, Y.match(new RegExp(`${commonDigits[i]}`, 'g')).length));
        }
    }

    // If we have common 0s, add them at the end
    if (commonDigits.includes(0)) {
        answer += '0'.repeat(Math.min(X.match(/0/g).length, Y.match(/0/g).length));
    }

    return answer;
}
