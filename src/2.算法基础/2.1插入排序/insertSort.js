// 就比如打牌时插入手牌，把要插入的牌拿出来{1}，一张一张向后滑{2}，找到合适位置插进去{3}
export default function insertSort(array){
    let i,j;
    for(i = 1; i< array.length; i++){
        let current = array[i]; // {1}
        for(j = i; j > 0 && array[j-1] > current;j--){ // 将j位置抽出来 从j-1开始比较
            array[j] = array[j - 1]; // {2}  将j-1 后移至 j
        }
        array[j] = current; // {3}
    }
}

// 插入排序的递归版本
function ResuInsert(array, start = 0, end = array.length-1){
    console.log(start,end)
    let length = end - start + 1,
    key = array[end];

    let i; //记录插入位置
    if(length === 1){
        return;
    }else{
        ResuInsert(array, start, end - 1);
        for( i = end - 1; i>= start && array[i] > key; i--){
            array[i+1] = array[i]
        }
        array[i+1] = key // i--偏移修补
    }
}

