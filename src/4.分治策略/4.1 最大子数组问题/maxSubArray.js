function maxSubArray(array, low, high) {
    if (low === high) {
        return { low, high, sum: array[low] }
    }
    let mid = Math.floor((low + high) / 2);
    let leftResult = maxSubArray(array, low, mid);
    let rightResult = maxSubArray(array, mid + 1, high);
    let crossResult = maxSubCrossArray(array, low, mid, high);

    if (leftResult.sum > rightResult.sum && leftResult > crossResult.sum) {
        return leftResult
    } else if (rightResult.sum > leftResult.sum && rightResult > crossResult.sum) {
        return rightResult
    } else {
        return crossResult
    }
}

function maxSubCrossArray(array, low, mid, high) {
    // 最大数字必然是array[?-mid]和array[mid-?]之和
    let leftsum = Number.MIN_SAFE_INTEGER,rightSum = Number.MIN_SAFE_INTEGER; sum = 0,
        leftIndex = mid, rightIndex = mid;
    for (let il = mid; il >= low; il--) {
        sum += array[il];
        if (sum > leftsum) {
            leftsum  = sum;
            leftIndex = il;
        }
    }
    sum = 0;
    for (let ir = mid; ir <= high; ir++) {
        sum += array[ir];
        if (sum > rightSum) {
            rightSum  = sum;
            rightIndex = ir;
        }
    }

    return {
        low: leftIndex,
        high: rightIndex,
        sum: leftsum + rightSum - array[mid]
    }
}