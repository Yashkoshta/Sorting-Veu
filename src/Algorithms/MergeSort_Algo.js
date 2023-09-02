/*export const MergeSort = array=>{
    if (array.length===1) return array;
    const middIndex=Math.floor(array.length/2);
    const FirstHalf=MergeSort(array.slice(0,middIndex));
    const SecondHalf=MergeSort(array.slice(middIndex));
    const SortedArray=[];
    let i=0,
    j=0;
    while (i<FirstHalf.length && j<SecondHalf.length){
        if (FirstHalf[i]<SecondHalf[j]){
            SortedArray.push(FirstHalf[i++]);
        }else{
            SortedArray.push(SecondHalf[j++]);
        }
    }
    while (i<FirstHalf.length) SortedArray.push(FirstHalf[i++]);
    while (j<SecondHalf.length) SortedArray.push(SecondHalf[j++]);
    return SortedArray;
};*/

export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }

  function doMerge(mainArray,startIdx,middleIdx,endIdx,auxiliaryArray,animations) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      
      animations.push([i, i]);
      animations.push([i, i]);
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      animations.push([j, j]);
      animations.push([j, j]);
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

  function mergeSortHelper(mainArray,startIdx,endIdx,auxiliaryArray,animations) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  