export function getInsertionSortAnimation(array){
        const animations = [];
        for (let i = 0; i < array.length - 1; i++) {
            let key = array[i];
            let j = i - 1;
            while (j >= 0 && key < array[j]) {
                // Compare the two elements
                animations.push([i, j]);
    
                // Move the element to the right
                animations.push([i, j]);
                animations.push([j + 1, array[j]]);
    
                array[j + 1] = array[j];
                j--;
            }
            // Place the key in the correct position
            animations.push([i, j + 1]);
            animations.push([i, j + 1]);
            animations.push([j + 1, key]);
    
            array[j + 1] = key;
        }
        return animations;
    }