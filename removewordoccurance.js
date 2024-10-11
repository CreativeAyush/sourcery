
let str1 = "mynameayush";
let str2="ayush";
let str3="";
let b=0;
let a=0;
while(a<=str1.length)
{
    while(b<=str2.length)
    {
      if(str1[a]==str2[b])
      {
        a++;
        b++;
      }
      else
      {
        str3+=str1[b];
        a++;
        // if(str1[a]!=str2[b])
        // {
        //   b=0;
        // }
      }
    }
}
console.log(str3);


// function compares(str1,str2,a)
// {
//   for(let c=0;c<str2.length;c++)
//   {
//     if(str1[a+1]!=str2[c])
//     {
//       return false;
//     }
//     else{
//       return true;
//     }
//   }
// }


