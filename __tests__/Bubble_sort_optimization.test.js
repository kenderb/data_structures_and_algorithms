// Optimized BubbleSort with noSwaps
import bubbleSort from '../sorting/bubble_sort/Bubble_sort_optimization';

test('bubbleSort sort an array', () => {
  expect(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});