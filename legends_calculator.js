class legends_calculator{
    constructor(){
        this.one = 1;
        this.two = 2;
        this.three = 3;
        this.four = 4;
        this.five = 5;
        this.empty1 = "";
        this.empty2 = "";
    }

    firstMethod = (num) =>{
        if(num === 1){
            this.empty1 = this.one
        } else if(num === 2){
            this.empty1 = this.two
        } else if(num === 3){
            this.empty1 = this.three
        }else if(num === 4){
            this.empty1 = this.four
        }else if(num === 5){
            this.empty1 = this.five
        }
        return this.empty1;
    }

    secondMethod = (num) =>{
        if(num === 1){
            this.empty2 = this.one
        } else if(num === 2){
            this.empty2 = this.two
        } else if(num === 3){
            this.empty2 = this.three
        }else if(num === 4){
            this.empty2 = this.four
        }else if(num === 5){
            this.empty2 = this.five
        }
        return this.empty2;
    }

    add = () =>{
        return this.empty1 + this.empty2
    }
    subtract = () => {
        return this.empty1 - this.empty2
    }
    multiply = () =>{
        return this.empty1 * this.empty2
    }
}

calculator = new legends_calculator();
calculator.firstMethod(4)
calculator.secondMethod(3)
console.log(calculator.add());
console.log(calculator.multiply());