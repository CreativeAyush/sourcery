String.prototype.removerepeat=function()
{
    let str="";
    for(let i=0;i<this.length;i++)
    {
        let j=i+1;
        while(j<=this.length)
        {
            if(this[i]!=this[j])
            {
                if(j!=this.length)
                {
                    j++;
                }
                else
                {
                str=str+this[j];
                }   
            }
            else{
                break;
            }
            
        }
    }
    console.log(str);
}

let str1="ayusha";
str1.removerepeat();



// String.prototype.removerepeat = function() {
//     let str = ""; 
//     for (let i = 0; i < this.length; i++) {
//         if (!str.includes(this[i])) {
//             str += this[i];
//         }
//     }
//     console.log(str);
// };

// let str1 = "ayusha";
// str1.removerepeat(); 

