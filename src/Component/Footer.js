import React from 'react'
class Footer extends React.Component {
    state = {  } 
    render() { 
        return (
          <>
          <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mt-5 mb-3">
          <a className="navbar-brand" >
            Quick Notes.....
          </a>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading1">
                Bubble Sort
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading2">
                Selection Sort
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                
                role="button"
                aria-expanded="false"
              >
                More
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#scrollspyHeading3">
                  Insertion Sort
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#scrollspyHeading4">
                  Merge Sort
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#scrollspyHeading5">
                  Quick Sort
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#scrollspyHeading5">
                  Heap Sort
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-example2"
          data-bs-root-margin="0px 0px -40%"
          data-bs-smooth-scroll="true"
          className="scrollspy-example bg-body-tertiary p-3 rounded-2"
          tabIndex={0}
        >
          <h4 id="scrollspyHeading1">Bubble Sort</h4>
          <p>Bubble Sort is also referred to as Sinking Sort. In this, we repeatedly compare each pair of adjacent items and swap them if they are in the wrong order.</p>
          <h4 id="scrollspyHeading2">Selection Sort</h4>
          <p>In Selection Sort we repeatedly find the minimum element and move it to the sorted part of the array to make the unsorted array sorted.</p>
          <h4 id="scrollspyHeading3">Insertion Sort</h4>
          <p>In Insertion Sort we divide the array into 2 parts then take 1st element from the unsorted array and find its correct position in the sorted array. Repeat unit unsorted array is empty.</p>
          <h4 id="scrollspyHeading4">Merge Sort</h4>
          <p>It is a divide-and-conquer approach. We Divide the input array into two halves and keep halving recursively until they become two small that cannot be broken further. Then we Merge half by sorting them.</p>
          <h4 id="scrollspyHeading5">Quick Sort</h4>
          <p>Quick Sort is Divide & Conquer algorithm. 1st, find the pivot number and make sure the smaller number is located at the left of the pivot and the bigger number is located at the right. "Unlike merge sort extra space is not required" </p>
          <h4 id="scrollspyHeading5">Heap Sort</h4>
          <p>Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure to repeatedly extract the maximum (or minimum) element from the heap and place it in the sorted portion of the array.</p>
        </div>


            <footer className="white-section" id="footer">
  <div className="container-fluid text-center">
    <div className="footer">
      <p>© Copyright YashKoshta</p>
    </div>
  </div>
</footer>
</>
        );
    }
}
 
export default Footer;