let array = [["suraj", "sanjay", "khot"], ["adarsh", "uday", "pujari"], ['shubham', 'dayanand', 'hande']]
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        console.log(`array [${i}] [${j}] ${array[i][j]}`)
    }
}