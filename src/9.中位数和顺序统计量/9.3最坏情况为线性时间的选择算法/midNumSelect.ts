function midNumSelect(arr: number[], start: number, end: number, i: number): number {
    const smallArr = [], midArr = [];
    for (let p = 0; p < arr.length; p += 5) {
        smallArr.push(arr.slice(p, p+5));
    }

    for (let q = 0; q < smallArr.length; q++) {
        insertSort(smallArr[i]);
        midArr.push(smallArr[ Math.floor(smallArr[i].length / 2) ])
    }

    const midMid = midNumSelect(midArr, 0, midArr.length -1, Math.floor(midArr.length / 2))

    const p = midPartition(arr, midMid)
    const k = p - start + 1;
    if (k === i) {
        return midMid
    } else if (i < k) {
        return midNumSelect(arr, start, p -1, i)
    } else {
        return midNumSelect(arr, p + 1, end, i - k)
    }
}

// 作用为按照中位数的中位数进行划分，未验证正确性
function midPartition(arr: number[], mid: number): number {
    let low = 0, high = arr.length;
    for (let i = 0; i < arr.length && low < high; i++) {
        if(arr[i] === mid) {
            i++
        } else if (arr[i] < mid) {
            [arr[low], arr[i]] = [arr[i], arr[low]]
            low++
            i++
        } else {
            [arr[high], arr[i]] = [arr[i], arr[high]]
            high--
        }
    }

    return low
}

function insertSort(arr: number[]): void {
    if (arr.length <= 1) {
        return
    }
    let i: number, j: number;
    for (i = 1; i < arr.length; i++) {
        const curr = arr[i];
        for (j = i; j > 0 && arr[j] < curr; j--) {
            arr[j] = arr[j -1]
        }
        arr[j] = curr
    }
}