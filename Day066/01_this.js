// this refres to current thing
let obj = {
    name: 'suraj',
    eng: 100,
    math: 99,
    science: 98,
    getAvg() {
        console.log("object this:", this)
        console.log((this.eng + this.math + this.science) / 3)
    }
}
console.log(obj)
obj.getAvg()
console.log("this", this)