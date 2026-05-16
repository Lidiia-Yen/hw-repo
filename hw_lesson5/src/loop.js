console.log('----------> for from 0 to 9');
for (let i = 0; i <= 9; i++) {
    console.log(i);
}

console.log('----------> while from 0 to 9');
let j = 0;
while (j <= 9) {
    console.log(j);
    j++;
}

console.log('----------> do.. while from 0 to 9');
let g = 0;
do {
    console.log(g);
    g++;
} while (g <= 9);


console.log('----------> for from 100 to 0, step -10');
for (let a = 100; a >= 0; a -= 10) {
    console.log(a);
}


console.log('----------> while from 100 to 0, step -10');
let b = 100;
while (b >= 0) {
    console.log(b);
    b -= 10;
}

console.log('----------> do.. while from 100 to 0, step -10');
let c = 100;
do {
    console.log(c);
    c -= 10;
} while (c >= 0);
