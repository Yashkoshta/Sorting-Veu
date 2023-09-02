export function getHeapSortAnimations(array) {
    const animations = [];
    heapSortWithAnimations(array, animations);
    return animations;
  }
  
  function heapSortWithAnimations(array, animations) {
    const n = array.length;
  
    // Build max heap with animations
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapifyWithAnimations(array, n, i, animations);
    }
  
    // Extract elements one by one with animations
    for (let i = n - 1; i > 0; i--) {
      animations.push(['swap', 0, i]); // Mark the elements as swapping
      const temp = array[0];
      array[0] = array[i];
      array[i] = temp;
  
      heapifyWithAnimations(array, i, 0, animations);
    }
  }
  
  function heapifyWithAnimations(array, n, i, animations) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
  
    if (left < n && array[left] > array[largest]) {
      largest = left;
    }
  
    if (right < n && array[right] > array[largest]) {
      largest = right;
    }
  
    if (largest !== i) {
      animations.push(['swap', i, largest]); // Mark the elements as swapping
      const temp = array[i];
      array[i] = array[largest];
      array[largest] = temp;
  
      heapifyWithAnimations(array, n, largest, animations);
    }
  }