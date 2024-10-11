String.prototype.toLowerCases=function()
{
    let str2="";
    for(let a=0;a<str1.length;a++)
    {
        if(this.charCodeAt(a)>=65 &&  this.charCodeAt(a)<=90)
        {
            str2=str2+String.fromCharCode(this.charCodeAt(a) + 32);
        }
        else
        {
            str2=str2+this;
        }

    }
    console.log(str2);
}

let str1="ABHISHEK";
str1.toLowerCases();


  