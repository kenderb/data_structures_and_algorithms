// Optimized BubbleSort with noSwaps
import bubbleSort from '../sorting/bubble_sort/Bubble_sort_optimization';

test('bubbleSort sort [8, 1, 2, 3, 4, 5, 6, 7] array', () => {
  expect(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});
test('bubbleSort sort [12, 3, 2, 8, 4, 5, 25, 30] array', () => {
  expect(bubbleSort([12, 3, 2, 8, 4, 5, 25, 30])).toEqual([2, 3, 4, 5, 8, 12, 25, 30]);
});