function partition(arr, start, end) {
    let key = arr[end],
    lponit = start - 1;
    for (let rpoint = start; rpoint < end; rpoint++) {
        if (arr[rpoint] <= key) {
            lpoint ++;
            [arr[lponit], arr[rpoint]] = [arr[rpoint], arr[lponit]]
        }
    }
    [arr[lponit+1], arr[end]] = [arr[end], arr[lponit+1]]
    return lponit + 1
}



function quickSort(arr, start, end) {
    let point = partition(arr, start, end);
    quickSort(arr, start, point-1)
    quickSort(arr, point+1, end)
}



// 更好的分区划法，能更好的避免最坏情况 三路快排
function threePartition(arr, start, end) {
    let stand = arr[start],
    lp = start,
    rp = end + 1;
    
    for (let i = start + 1; i < rp;) {
        if (arr[i] === stand) {
            i++
        } else if (arr[i] > stand) {
            rp--;
            [arr[i], arr[rp]] = [arr[rp], arr[i]]
        } else {
            lp++
            [arr[i], arr[lp]] = [arr[lp], arr[i]]
            i++
        }
    }
    [arr[lp], arr[start]] = [arr[start], arr[lp]]

    return { lp, rp }
}

function threeQuickSort(arr, start, end){
    if( start >= end ){
        return;
    }
    let { lp, rp } = threePartition(arr, start, end);
    threeQuickSort(arr, start, lp)
    threeQuickSort(arr, rp, end)
}
// arr = [8,5,8,4,3,7,9,10,8,2,6]

// arr = [8,5,4,3,7,9,10,2,6]