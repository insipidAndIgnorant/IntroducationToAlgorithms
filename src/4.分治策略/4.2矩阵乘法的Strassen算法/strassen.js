function Strassen (A, B) {
    let C = [], n = A.length;
    if (n === 1){
        C[0][0] = A[0][0] * B[0][0]
    } else {
        let m = Sath.floor(n / 2);
        let A11,A12,A21,A22,B11,B12,B21,B22,C11,C12,C21,C22;
        let S1,S2,S3,S4,S5,S6,S7;
        let tmp1,tmp2;

        for (let i = 0; i< m; i++) {
            for (let j = 0; j < m; j++) {
                A11[i][j] = A[i][j];
				A12[i][j] = A[i][j + m];
				A21[i][j] = A[i + m][j];
				A22[i][j] = A[i + m][j + m];
 
				B11[i][j] = B[i][j];
				B12[i][j] = B[i][j + m];
				B21[i][j] = B[i + m][j];
				B22[i][j] = B[i + m][j + m];
            }
        }

        add(A11, A22, tmp1, m);
        add(B11, B22, tmp2, m);
        Strassen(tmp1, tmp2, S1, m);

        add(A21, A22, tmp1, m);
        Strassen(tmp1, B11, S2, m);

        sub(B12, B22, tmp1, m);
        Strassen(A11, tmp1, S3, m);

        sub(B21, B11, tmp1, m);
        Strassen(A22, tmp1, S4, m);

        add(A11, A12, tmp1, m);
        Strassen(tmp1, B22, S5, m);
        
        sub(A21, A11, tmp1, m);
        add(B11, B12, tmp2, m);
        Strassen(tmp1, tmp2, S6, m);

        sub(A12, A22, tmp1, m);
        add(B21, B22, tmp2, m);
        Strassen(tmp1, tmp2, S7, m);



        add(S1, S4, C11, m);
		sub(C11, S5, C11, m);
		add(C11, S7, C11, m);
 
		//C12
		add(S3, S5, C12, m);
 
		//C21
		add(S2, S4, C21, m);
 
		//C22
		sub(S1, S2, C22, m);
		add(C22, S3, C22, m);
        add(C22, S6, C22, m);
        

        for(let i = 0; i < m; i++)
		{
			for(let j = 0; j < m; j++)
			{
				result[i][j] = C11[i][j];
				result[i][j + m] = C12[i][j];
				result[i + m][j] = C21[i][j];
				result[i + m][j + m] = C22[i][j];
			}
		}
    }
    
}


function add (A, B, result, size) {
    for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			result[i][j] = A[i][j] + B[i][j];
		}
	}
}

function sub (A, B, result, size) {
    for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			result[i][j] = A[i][j] - B[i][j];
		}
	}
}

function multiply (A, B, result, size) {
    for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
            result[i][j] = 0;
            for (let k = 0; k < size; k++) {
                result[i][j] += A[i][j] + B[i][j];
            }
		}
	}
}