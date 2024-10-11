String.prototype.toToggleCases=function()
{
    let str2="";
    str2= str2+str1.slice(0, 1);
    for(let a=1;a<str1.length;a++)
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
    console.log(str2);
}

let str1="ayush";
str1.toToggleCases();


  