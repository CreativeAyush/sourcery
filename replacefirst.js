String.prototype.replacefirst=function(str2,str3)
{
    let str4="";
    let count=0;
    for(let i=0;i<this.length;i++)
    {
        if(this[i]==str2 && count==0)
        {
                str4+=str3;
                count++;  
        }
        else{
            str4+=this[i];
        }
    }
    console.log(str4);
}

let str1="ayaush";
let str2="a";
let str3="b";
str1.replacefirst(str2,str3);