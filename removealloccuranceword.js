let a = "ayushyadavayush";
let b = "ayush";
let str3 = "";

for (let i = 0; i < a.length; ) {
    let found = true;
    for (let j = 0; j < b.length; j++) {
        if (a[i + j] !== b[j]) {
            found = false;
            break;
        }
    }
    
    if (found) {
        i += b.length;
    } else {
        str3 += a[i];
        i++;
    }
}

console.log(str3); 
