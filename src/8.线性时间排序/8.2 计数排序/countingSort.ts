function countingSort (A:number[], B: number[], k: number): void {
    let C: number[];
    for (let i = 0; i <= k; i++) {
        C[i] = 0;
    }
    for (let i = 0; i < A.length; i++) {
        C[A[i]] += 1;
    }
    for (let i = 1; i <= k; i++) {
        C[i] += C[i -1];
    }

    for (let i = A.length - 1; i >= 0; i--) {
        B[C[A[i]] - 1] = A[i];
        C[A[i]] -= 1
    }
}

function countingSort1 (A, k) {
    let C=[];
    for (let i = 0; i <= k; i++) {
        C[i] = 0;
    }
    for (let i = 0; i < A.length; i++) {
        C[A[i]] += 1;
    }
    for (let i = 1; i <= k; i++) {
        C[i] += C[i -1];
    }
let p = 0;
    for (let i = 0; i <= C.length; i++) {
        
        if (C[i] === 0 || C[i] === C[i - 1]) {
            continue
        } else {
			let len = C[i-1] ? C[i] - C[i-1] : C[i]
            for (let j = 0; j < len; j++) {
                A[p] = i
                p++
            }
        }
    }

    return A
}