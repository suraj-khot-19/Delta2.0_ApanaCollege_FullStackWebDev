a = 10;
b = 20;

c = a + b;
console.log(a, "+", b, ":", c);

d = a - b;
console.log(a, "-", b, ":", d);

e = a * b;
console.log(a, "*", b, ":", e);

f = a / b;
console.log(a, "/", b, ":", f);

// remainder
g = a % 2;
h = b % 2;
console.log(a, "/2:", g);
console.log(b, "/2:", h);

// square
i = a ** 2;
j = b ** 2;
console.log(a, "**2:", i);
console.log(b, "**2:", j);

/*
PS D:\Workspace\Delta-2.0\Day035> node 03_operations.js
10 + 20 : 30
10 - 20 : -10
10 * 20 : 200
10 / 20 : 0.5
10 /2: 0
20 /2: 0
10 **2: 100
20 **2: 400
*/