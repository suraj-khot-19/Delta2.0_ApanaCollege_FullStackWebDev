let arr = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let i = 0; i < arr.length; i++) {
    if (i > 4)
        break
    console.log(arr[i]);
}