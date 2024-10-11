let a = "ayushyadavayush";
let b = "ayush";
let count = 0;

for (let i = 0; i <= a.length - b.length; i++) {
    let f= true;
    for (let j = 0; j < b.length; j++) {
        if (a[i + j] !== b[j]) {
            f = false;
            break;
        }
    }
    if (f) {
        count++;
    }
}

console.log(count);
