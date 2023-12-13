function solution(numbers) {
   const customSort = (a, b) => {
    const order1 = parseInt(`${a}${b}`);
    const order2 = parseInt(`${b}${a}`);
    return order2 - order1;
  };

  const sortedNumbers = numbers.sort(customSort);

  if (sortedNumbers[0] === 0) {
    return "0";
  }

  const result = sortedNumbers.join("");
    
    return result
}