String.prototype.firstoccurance=function(str2)
{
    for(let i=0;i<this.length;i++)
        {
            if(this[i]==str2){
                return i;
                break;
            }
        }
}

let str1="ayusha";
let str2="y";
console.log(str1.firstoccurance(str2));