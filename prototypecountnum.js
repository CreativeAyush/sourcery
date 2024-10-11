String.prototype.counts=function()
{
    let count=0;
    for(let a=0;a<str.length;a++)
    {
        if(this[a]!=" ")
        {
            count++;
        }
    }
    console.log(count);
}

let str="ayushuh yadav";
str.counts();
