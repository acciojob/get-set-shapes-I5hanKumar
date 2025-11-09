//complete this code
class Rectangle {
    constructor(width, height){
        this._width = width;
        this._height = height;
    }
    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
    
    getArea(){
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    constructor(side){
     if (side <= 0) {
            throw new Error("Side must be a positive number");
    }
    super(side,side);
    }
    getPerimeter(){
        return this.width*4;
    }}
const rectangle =new Rectangle(10,20);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.getArea());

const square  = new Square(5);

console.log(square.width);
console.log(square.height);
console.log(square.getPerimeter());
console.log(square.getArea());

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
