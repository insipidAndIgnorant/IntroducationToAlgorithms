function maxHeapify (A, i) {
    let left = i*2+1, right = i*2 +2,largest = i;

    if (A[i] < A[left] && left <A.size) {
        largest = left
    }
    if (A[largest] < A[right] && right <A.size) {
        largest = right
    }
 
    if (largest !== i) {
        [A[i], A[largest]] = [A[largest], A[i]]
        minHeapify(A, largest) 
    }
}

function buildHeap (arr) {
    arr.size = arr.length;
    for (let i = (arr.length-1)/2; i>=0; i --) {
        maxHeapify(arr, i)
    }
}

function heapSort(arr) {
    buildHeap(arr);
    for (let i = arr.length-1; i > 0; i--) {
        [arr[i], arr[0]] = [arr[0], arr[i]]
        arr.size--
        maxHeapify(arr, 1)
    }
}