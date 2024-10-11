String.prototype.pallindrome=function(){
    let j=this.length-1;
    for(let i=0;i<=this.length/2;i++)
    {
        if(this[i]!=this[j])
        {
            return false;
        }
        else{
            j--;
        }
        return true;
    }
}

let str="ayu";
console.log(str.pallindrome());