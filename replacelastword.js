function replacelastoccurance(S1, S2)
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


let phele="ayush";
let dusre="sgdayushgfayushd";
let a=replacelastoccurance(phele,dusre);
let full="";
for(let i=0;i<dusre.length;i++)
{
    if(!(i>=a && i<phele.length+a))
    {
        full+=dusre[i];
    }
    
}
console.log(full);