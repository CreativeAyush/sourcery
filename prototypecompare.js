String.prototype.compares=function(str2){
    console.log(this['String']);
    if(this==str2)
    {
        return true;
    }
    else{
        return false;
    }   
}
let str1="ayush";
let str2="ayush";
console.log(str1.compares(str2));