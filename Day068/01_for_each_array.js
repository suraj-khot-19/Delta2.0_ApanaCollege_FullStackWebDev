let arr = [5, 6, 7, 8, 9, 10, 1, 2, 3, 4];
arr.forEach((e) => {
  console.log(e);
});

let array = [
  {
    name: "suraj",
    marks: 100,
  },
  {
    name: "adya",
    marks: 102,
  },
  {
    name: "shubh",
    marks: 90,
  },
];
array.forEach((el) => {
  console.log(el.name, " got ", el.marks);
});

arr.forEach((value, index, array) => {
  console.log(index, ":", value);
  console.log("overall arrray:", array);
});
