//Write a C program to copy one string to another string.
String.prototype.copyss=function(str2){
    
    for(let a=0;a<this.length;a++)
    {
        str2=str2+this[a];
        
    }

    console.log(str2);
}

str1="ayush";
str2="";
str1.copyss(str2);