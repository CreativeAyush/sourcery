let str1 = " ayush ";  
let Str = "";   
let start = 0;
let end = str1.length - 1;
while(start < str1.length && str1[start] === ' ') {
    start++;
}
while(end >= 0 && str1[end] === ' ') {
    end--;
}
for(let i = start; i <= end; i++) {
    Str += str1[i];
}

console.log(Str);  
