
const obj={
    1:'a',
    2:'b',
    3:'c',
};
let a=Object.keys(obj);
let max=a[0];
for(let i=0;i<a.length;i++)
    {
        if(parseInt(a[i])>max)
        {
            max=a[i];
        }
    }
    console.log(obj[max]);
    