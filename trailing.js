    let str1="ayush "
    let str2 = '';
    let end = str1.length - 1;
    
    while (end >= 0 && str1[end] === ' ') {
        end--;
    }
    
    for (let i = 0; i <= end; i++) {
        str2 += str1[i];
    }
    console.log(str2);