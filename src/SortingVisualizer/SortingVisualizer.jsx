import React from 'react'
import {getMergeSortAnimations} from '../Algorithms/MergeSort_Algo'
import { getBubbleSortAnimations } from '../Algorithms/BubbleSort_Algo';
import { getInsertionSortAnimation } from '../Algorithms/InsertionSort_Algo';
import {getQuickSortAnimations} from '../Algorithms/QuickSort_Algo';
import './SortingVisualizer.css'
import { getHeapSortAnimations } from '../Algorithms/HeapSort_Algo';
import {getSelectionSortAnimations} from '../Algorithms/SelectionSort_Algo'


const Animation_Speed=2;
const Number_Of_Array_Bars=310;
const PRIMARY_COLOR='cadetblue';
const SECONDARY_COLOR='red';

class SortingVisualizer extends React.Component {
    constructor(props){
    super(props);
    this.state={
        array:[],
        };
    }
    
    componentDidMount(){
        this.resetArray();
    }
    resetArray(){
        const array=[]
        for(let i=0;i<Number_Of_Array_Bars;i++){
        array.push(randomIntFromInterval(10,450));
        }
        this.setState({array});
    }

    
    BubbleSort() {
      const animations = getBubbleSortAnimations(this.state.array);
    const arrayBars = document.getElementsByClassName('array-bar');

    for (let i = 0; i < animations.length; i++) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const isColorChange = i % 3 !== 2;

        if (isColorChange) {
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * Animation_Speed);
        } else {
            setTimeout(() => {
                const [barIdx, newHeight] = animations[i];
                const barStyle = arrayBars[barIdx].style;
                barStyle.height = `${newHeight}px`;
            }, i * Animation_Speed);
        }
    }
    };
  
      
  SelectionSort(){
    const animations = getSelectionSortAnimations(this.state.array);
    const arrayBars = document.getElementsByClassName('array-bar');

    for (let i = 0; i < animations.length; i++) {
      const [action, barOneIdx, barTwoIdx, value1, value2] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;

      if (action === 'compare') {
       setTimeout(() => {
          barOneStyle.backgroundColor = SECONDARY_COLOR;
          barTwoStyle.backgroundColor = SECONDARY_COLOR;
        }, i * Animation_Speed);
      } else if (action === 'swap') {
        setTimeout(() => {
          barOneStyle.height = `${value2}px`;
          barTwoStyle.height = `${value1}px`;
        }, i * Animation_Speed);
      }

      setTimeout(() => {
        barOneStyle.backgroundColor = PRIMARY_COLOR;
        barTwoStyle.backgroundColor = PRIMARY_COLOR;
      }, (i + 1) * Animation_Speed);
    }

  }

    InsertionSort(){
        const animations = getInsertionSortAnimation(this.state.array);
    const arrayBars = document.getElementsByClassName('array-bar');

    for (let i = 0; i < animations.length; i++) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const isColorChange = i % 3 !== 2;

        if (isColorChange) {
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * Animation_Speed);
        } else {
            setTimeout(() => {
                const [barIdx, newHeight] = animations[i];
                const barStyle = arrayBars[barIdx].style;
                barStyle.height = `${newHeight}px`;
            }, i * Animation_Speed);
        }
    }
}


MergeSort() {
  const animations = getMergeSortAnimations(this.state.array);
  const arrayBars = document.getElementsByClassName('array-bar');

  for (let i = 0; i < animations.length; i++) { 
      const [barOneIdx, barTwoIdx] = animations[i];
    const isColorChange = i % 3 !== 2;
    
    if (isColorChange) {
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
      
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * Animation_Speed);
    
  } else {
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
      }, i * Animation_Speed);
    }
  }
}

QuickSort() {
  const animations = getQuickSortAnimations(this.state.array);
  const arrayBars = document.getElementsByClassName('array-bar');

  for (let i = 0; i < animations.length; i++) {
    const [action, barOneIdx, barTwoIdx, value1, value2] = animations[i];
    const barOneStyle = arrayBars[barOneIdx].style;
    const barTwoStyle = arrayBars[barTwoIdx].style;

    if (action === 'compare') {
     setTimeout(() => {
        barOneStyle.backgroundColor = SECONDARY_COLOR;
        barTwoStyle.backgroundColor = SECONDARY_COLOR;
      }, i * Animation_Speed);
    } else if (action === 'swap') {
      setTimeout(() => {
        barOneStyle.height = `${value2}px`;
        barTwoStyle.height = `${value1}px`;
      }, i * Animation_Speed);
    }

    setTimeout(() => {
      barOneStyle.backgroundColor = PRIMARY_COLOR;
      barTwoStyle.backgroundColor = PRIMARY_COLOR;
    }, (i + 1) * Animation_Speed);
  }

}
    HeapSort() {
      const animations = getHeapSortAnimations(this.state.array);
      const arrayBars = document.getElementsByClassName('array-bar');
    
      for (let i = 0; i < animations.length; i++) {
        const [action, barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
    
        if (action === 'compare') {
          setTimeout(() => {
            barOneStyle.backgroundColor = SECONDARY_COLOR;
            barTwoStyle.backgroundColor = SECONDARY_COLOR;
          }, i * Animation_Speed);
        } else if (action === 'swap') {
          setTimeout(() => {
            const tempHeight = barOneStyle.height;
            barOneStyle.height = barTwoStyle.height;
            barTwoStyle.height = tempHeight;
          }, i * Animation_Speed);
        }
    
        setTimeout(() => {
          barOneStyle.backgroundColor = PRIMARY_COLOR;
          barTwoStyle.backgroundColor = PRIMARY_COLOR;
        }, (i + 1) * Animation_Speed);
      }
    }

    testSortingAlgorithms() {
        for (let i = 0; i < 100; i++) {
          const array = [];
          const length = randomIntFromInterval(1, 1000);
          for (let i = 0; i < length; i++) {
            array.push(randomIntFromInterval(-1000, 1000));
          }

          const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
          const mergeSortedArray = getMergeSortAnimations(array.slice());
          const bubbleSortArray=getBubbleSortAnimations(array.slice());
          const insertionSortArray=getInsertionSortAnimation(array.slice());
          const selectionSortArray=getInsertionSortAnimation(array.slice());
          const quickSortArray=getQuickSortAnimations(array.slice());
          const heapSortArray=getHeapSortAnimations(array.slice());
          console.log(
            arrysAreEqual(javaScriptSortedArray, mergeSortedArray),
            arrysAreEqual(javaScriptSortedArray,bubbleSortArray),
            arrysAreEqual(javaScriptSortedArray,insertionSortArray),
            arrysAreEqual(javaScriptSortedArray,selectionSortArray),
            arrysAreEqual(javaScriptSortedArray,quickSortArray),
            arrysAreEqual(javaScriptSortedArray,heapSortArray)
            );
        }
      }
    

    render() { 
        const {array}=this.state;   
        return (
          <div className='array-container'>  
          <div className='array-buttons'>
            <button className='distance btn btn-outline-dark'onClick={()=> this.BubbleSort()}>BubbleSort</button>
            <button className='distance btn btn-outline-dark'onClick={()=> this.SelectionSort()}>SelectionSort</button>
            <button className='distance btn btn-outline-dark'onClick={()=> this.InsertionSort()}>InsertionSort</button>
            <button className='distance btn btn-outline-dark'onClick={()=> this.MergeSort()}>MergeSort</button>
            <button className='distance btn btn-outline-dark'onClick={()=> this.QuickSort()} >QuickSort</button>
            <button className='distance btn btn-outline-dark'onClick={()=> this.HeapSort()}>HeapSort</button>
        
          </div>

          {array.map((value,idx)=>(
              <div className='array-bar' 
              key={idx}
              style={{height:`${value}px`}}></div>
          ))}                  
          <div className="d-flex justify-content-center">
          <div className="d-grid gap-2 col-6">
            <button className="btn btn-outline-success" onClick={()=>this.resetArray()}>Generate New Array</button> 
            </div>
          </div>    
          </div>
          
        );
    }
}
function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
 
function arrysAreEqual(arrayOne,arrayTwo){
    if (arrayOne.length !== arrayTwo.length)return false;
    for (let i=0;i<arrayOne.length;i++){
        if(arrayOne[i]!==arrayTwo[i]){
            return false;
        }
    }
    return true;
}



export default SortingVisualizer;