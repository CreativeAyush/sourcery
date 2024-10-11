String.prototype.reverse=function()
{
    let str2="";
    for(let i=this.length-1;i>=0;i--)
    {
        str2+=this[i];
    }
    return str2;
    
}

let str1="ayush";
console.log(str1.reverse());



  
