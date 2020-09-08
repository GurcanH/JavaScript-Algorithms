function addUpTo1(n) {
    let total = 0;
    for (let i=1; i<=n; i++) {
        total += i;
    }
    
    return total;
}

let t1 = performance.now();
addUpTo1(1000000000);
let t2 = performance.now();

console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);



function addUpTo2(n) { 
    return n * (n + 1) / 2;
}

let tt1 = performance.now();
addUpTo2(1000000000);
let tt2 = performance.now();

console.log(`Time Elapsed: ${(tt2 - tt1) / 1000} seconds.`);