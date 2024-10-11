String.prototype.lastoccurance=function(str2)
{
    for(let i=this.length-1;i>=0;i--)
    {
        if(this[i]==str2)
        {
            return i;
            break;
        }
    }
}

let str1="ayusha";
let str2="a";
console.log(str1.lastoccurance(str2));