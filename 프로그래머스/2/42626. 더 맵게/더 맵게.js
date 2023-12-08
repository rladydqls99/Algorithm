class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  extractMin() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) {
        break;
      }

      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;

    while (true) {
      const leftChild = 2 * index + 1;
      const rightChild = 2 * index + 2;
      let smallest = index;

      if (
        leftChild < this.heap.length &&
        this.heap[leftChild] < this.heap[smallest]
      ) {
        smallest = leftChild;
      }

      if (
        rightChild < this.heap.length &&
        this.heap[rightChild] < this.heap[smallest]
      ) {
        smallest = rightChild;
      }

      if (smallest === index) {
        break;
      }

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

function solution(scoville, K) {
  const heap = new MinHeap();

  // Insert all scoville values into the heap
  for (const value of scoville) {
    heap.insert(value);
  }

  let mixCount = 0;

  // Mix until the smallest scoville is greater than or equal to K
  while (heap.heap.length > 1 && heap.heap[0] < K) {
    const leastSpicy = heap.extractMin();
    const secondLeastSpicy = heap.extractMin();
    const mixedScoville = leastSpicy + 2 * secondLeastSpicy;
    heap.insert(mixedScoville);
    mixCount++;
  }

  // Check if all foods have a Scoville rating greater than or equal to K
  if (heap.heap[0] < K) {
    return -1; // It's not possible to achieve the desired Scoville rating
  }

  return mixCount;
}