// 期望时间为O(n), 最坏情况为O(n^2)
// 前提：元素互异

function randomSelect(A: number[], p: number, r: number, i: number) {
    if (p === r) {
        return A[p]
    }

    const q = randomPartition(A, p, r);
    const k = q - p +  1;
    if (k === i) {
        return A[q]
    } else if (k < i) {
        return randomSelect(A, p, q - 1, i);
    } else {
        // 前面部分有k个小于A[p]，只需在后面部分查找第i-k个
        return randomSelect(A, q + 1, r, i - k)
    }
}

function randomPartition(A: number[], p: number, r: number) {
    const rand = Math.floor(Math.random() * p) + r - p;
    [A[p], A[rand]] = [A[rand], A[p]]
    return partition(A, p, r)
}

function partition(arr: number[], start: number, end: number) {
    let key = arr[end],lpoint = start - 1;
    for (let rpoint = start; rpoint < end; rpoint++) {
        if (arr[rpoint] <= key) {
            lpoint++;
            [arr[lpoint], arr[rpoint]] = [arr[rpoint], arr[lpoint]]
        }
    }
    [arr[lpoint+1], arr[end]] = [arr[end], arr[lpoint+1]]
    return lpoint + 1
}
