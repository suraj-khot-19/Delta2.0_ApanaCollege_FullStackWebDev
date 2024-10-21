const student = {
    name: "suraj",
    marks: 99,
    prop: this,
    getName: function () {
        console.log(this); // -> student
        console.log(this.name);
    },
    getMarks: () => {
        console.log(this); // -> window
        console.log(this.marks); //! undefined haaa window.marks is not there
    },
};

// object ke liye *this will be *global-scope means window
console.log("student.prop: ", student.prop);

// function ke liye *this will be *parent-scope means object in this case
console.log("student.getName():", student.getName());

// arrow function ke liye *this willl be *parent's-scope means parent is object and objects parent means window in this case
// ! nothing but laxical scope
console.log("student.getMarks():", student.getMarks());

// ! basically
const obj = {
    key: "value",
    simpleFun: function () {
        console.log(this); // -> object
    },
    arrowFun: () => {
        console.log(this); // -> window
    },
};
