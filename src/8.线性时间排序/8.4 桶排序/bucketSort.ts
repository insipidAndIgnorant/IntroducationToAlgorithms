function bucketSort(nums :number[]) :number[] {
    let result :number[] = [], bucket : number[][] = [];
    for (let i = 0; i < nums.length; i++) {
        bucket.push([])
    }
    for (let i = 0; i < nums.length; i++) {
        bucket[Math.floor(nums.length * nums[i])].push(nums[i]);
    }

    for (let i = 0; i < nums.length; i++) {
        insertSort(bucket[i])
    }

    for (let i = 0; i < nums.length; i++) {
        result.push(...bucket[i])
    }

    return result
}

function insertSort(array :number[]){
    let i,j;
    for(i = 1; i< array.length; i++){
        let current = array[i]; 
        for(j = i; j > 0 && array[j-1] > current;j--){
            array[j] = array[j - 1];
        }
        array[j] = current;
    }
}
