String.prototype.findcount= function()
{
    let countalpha = 0;
    let countspecel=0;
    countnumber=0;
    for(let i = 0; i < this.length; i++) {
        if((this.charCodeAt(i)>=65 &&  this.charCodeAt(i)<=90) || (this.charCodeAt(i)>=97 &&  this.charCodeAt(i)<=122))
            {
                countalpha++;;
            }
        else if((this.charCodeAt(i)>=32 &&  this.charCodeAt(i)<=47) || (this.charCodeAt(i)>=58 &&  this.charCodeAt(i)<=64) || (this.charCodeAt(i)>=91 &&  this.charCodeAt(i)<=96) || (this.charCodeAt(i)>=123 &&  this.charCodeAt(i)<=126))
                {
                    countspecel++;;
                }
        if((this.charCodeAt(i)>=48 &&  this.charCodeAt(i)<=57))
                    {
                        countnumber++;;
                    }
        
    
}

console.log(`${countalpha} ,${countspecel},${countnumber}`);
}

let str="ayush123@4";
str.findcount();