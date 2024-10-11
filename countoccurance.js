// . Write a C program to search all occurrences of a character in given string.
String.prototype.alloccurance=function()
{
    let count=0;
    for(let i=0;i<=this.length;i++)
    {
        if(this[i]==str2)
        {
            count++;
        }
    }
    console.log(`count of character are ${count}`);
    
}

let str="ayushaa";
let str2="a";
str.alloccurance(str2);