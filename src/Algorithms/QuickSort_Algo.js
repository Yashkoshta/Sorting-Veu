export function getQuickSortAnimations(array, start, end) {
  const animations = [];

  function partition(array, start, end) {
      const pivot = array[end];
      let pivotIndex = start;

      for (let i = start; i < end; i++) {
          // Compare the two elements
          animations.push(['compare', i, end]);

          if (array[i] < pivot) {
              // Swap elements
              animations.push(['swap', i, pivotIndex]);
              const temp = array[i];
              array[i] = array[pivotIndex];
              array[pivotIndex] = temp;

              pivotIndex++;
          }
      }

      // Swap pivot element to its correct position
      animations.push(['swap', pivotIndex, end]);
      const temp = array[pivotIndex];
      array[pivotIndex] = array[end];
      array[end] = temp;

      return pivotIndex;
  }

  if (start < end) {
      const pivotIndex = partition(array, start, end);
      // Accumulate animations from recursive calls
      animations.push(getQuickSortAnimations(array, start, pivotIndex - 1));
      animations.push(getQuickSortAnimations(array, pivotIndex + 1, end));
  }

  return animations;
}