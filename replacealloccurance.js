String.prototype.replacealloccurance=function(str2,str3)
{
    let str4="";
    for(let i=0;i<this.length;i++)
    {
        if(this[i]==str2)
        {
                str4+=str3;
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
str1.replacealloccurance(str2,str3);