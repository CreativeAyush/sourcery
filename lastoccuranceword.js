function findSubstring(S1, S2)
{
    const M = S1.length;
    const N = S2.length;

    for (let i = N-M; i >= 0; i--) {

        let j;
        for (j = M; j > 0; j--) {
            if (S2[i + j] !== S1[j]) {
                break;
            }
        }

       
        if (j === M) {
          
            return i;
        }
    }
    
    return -1;
}

console.log(findSubstring("ayush","sgdayushhgfayushv"));