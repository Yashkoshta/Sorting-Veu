export function getSelectionSortAnimations(array) {
    const animations = [];
    const n = array.length;
  
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < n; j++) {
        // Compare the two elements
        animations.push(['compare', j, minIndex]);
  
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
  
      // Swap elements if necessary
      if (minIndex !== i) {
        animations.push(['swap', i, minIndex, array[i], array[minIndex]]);
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
      }
    }
  
    return animations;
  }