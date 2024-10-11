String.prototype.removeblank=function()
{
    let str2="";
    for(let i=0;i<=this.length-1;i++)
    {
        if(this[i]!==" ")
        {
            str2+=this[i];

        }
    }
    return str2;
}

let str1="ayus   h";
console.log(str1.removeblank());