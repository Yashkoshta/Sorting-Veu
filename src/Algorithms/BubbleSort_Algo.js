export function getBubbleSortAnimations(array) {
    const animations = [];
    const n = array.length;
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        animations.push([j, j + 1, false]); // Compare action
      
        if (array[j] > array[j + 1]) {
          animations.push([j, j + 1, true]); // Swap action

          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return animations;
  }
 