String.prototype.removefirstoccurance=function(str2)
{
    let str3="";
    let count=0;
    for(let i=0;i<this.length;i++)
        {
            if(this[i]==str2 && count==0){
                continue;
                count++;
            }
            str3=str3+this[i];
            
        }
        console.log(str3);
}

let str1="ayusha";
let str2="y";
str1.removefirstoccurance(str2);