function findfirstoccuranceword(S1, S2)
{
    const M = S1.length;
    const N = S2.length;

    for (let i = 0; i <= N - M; i++) {

        let j;
        for (j = 0; j < M; j++) {
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

let phele="ayush";
let dusre="sgdayushgfd";
let a=findfirstoccuranceword(phele,dusre);
let full="";
for(let i=0;i<dusre.length;i++)
{
    if(!(i>=a && i<phele.length+a))
    {
        full+=dusre[i];
    }
    
}
console.log(full);