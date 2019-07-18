function mergeSort(array){
    let length = array.length;
    if( length === 1 ) {
        return array;
    }
    let mid = Math.floor( length / 2 ),
    left = array.slice( 0, mid ),
    right = array.slice( mid, length );
    return merge(mergeSort( left ), mergeSort( right ));
}

function merge(leftArr, rightAr){
    // 将已排序好的两个数组合并
    let preLength = leftArr.length;
    let apdLength = rightAr.length;
    let left = 0, right = 0, result = [];

    while( left < preLength && right < apdLength){
        if(leftArr[left] < rightAr[right]){ // 左边比右边小 左下标+1
            result.push( leftArr[left++] )
        }else{
            result.push( rightAr[right++] )
        }
    }
    // 处理剩余
    while(left < preLength ){
        result.push( leftArr[left++] ); //可以直接改为concat
    }
    while(right < apdLength ){
        result.push( rightAr[right++] );
    }

    return result;
}