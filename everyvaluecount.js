String.prototype.everyvalue=function()
{
let b={};
for(let i=0;i<str.length;i++)
{
    let c=str[i];
    if(!b[c])
    {
        b[c]=1;
    }
    else{
        b[c]++;
    }
}
console.log(b);

}

let str="ayush";
str.everyvalue();