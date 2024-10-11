String.prototype.leading=function()
{
    let str1="";
let i=0;
while(i<str.length)
{
    if(str[i]!="#")
    {
        str1+=str[i];
        i++;
    }
    else{
        i++;
    }
}
console.log(str1);
}

let str="#ayush";
str.leading();
