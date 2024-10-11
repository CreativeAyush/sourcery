String.prototype.vowels=function()
{
let countvowel=0;
let countconsonent=0;
for(let a=0;a<str.length;a++)
{
    if(str[a]!=" ")
    {
    if(str[a]=="a" || str[a]=="e" || str[a]=="i" || str[a]=="o" || str[a]=="u" )
    {
        countvowel++;
    }
    else{
        countconsonent++;
    }
}
}
console.log(`Vowel is ${countvowel} and ${countconsonent} is consonent`);
}

let str="ayush";
str.vowels();