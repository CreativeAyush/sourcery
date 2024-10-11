String.prototype.toUpperCases=function()
{
    let str2="";
    for(let a=0;a<this.length;a++)
    {
        if(this.charCodeAt(a)>=97 &&  this.charCodeAt(a)<=122)
        {
            str2=str2+String.fromCharCode(this.charCodeAt(a) - 32);
        }
        else
        {
            str2=str2+this;
        }

    }
    return str2;
}

let str4="abhishek";
let str5="abhuinav";

console.log(str4.toUpperCases());
console.log(str5.toUpperCase());



  