// . Write a C program to search all occurrences of a character in given string.
String.prototype.alloccurance=function()
{
    let count=0;
    for(let i=0;i<=this.length;i++)
    {
        if(this[i]==str2)
        {
            console.log(i);
            count++;
        }
    }
    
}

let str="ayushaa";
let str2="a";
str.alloccurance(str2);