class Shape {
    area() {
        return 0;
    }
  
    perimeter() {
      return 0;
    }
  
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
    Eso(){
        console.log(this.toString(),`Area: ${this.area()} - Perimeter: ${this.perimeter()}`)
    }
}
  
class Circle extends Shape {
    constructor(r) {
        super();
        this.radius = r;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}
  
class Rectangle extends Shape {
    constructor(w, h) {
        super();
        this.width = w;
        this.height = h;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * this.width + 2 * this.height;
    }
}
  
class Square extends Rectangle {
    constructor(l) {
        super(l, l);
    }
}
  
class Triangle extends Shape {
    constructor(b, h) {
        super();
        this.base = b; 
        this.height = h;
    }

    area() {
        return this.base * this.height / 2;
    }
}
class Triangulo extends Triangle{
    constructor(a, b, c){
        super();
        this.a = a;
        this.b = b;
        this.c = c;
        const s = (a + b + c)/2
        this.T = s*(s-a)*(s-b)*(s-c);
    }
    perimeter(){
        return this.a + this.b + this.c;
    }
    area(){
        return Math.sqrt(this.T);
    }
}
class Trapecio extends Shape{
    constructor(b, h, c){
    super();
    this.base = b;
    this.height = h;
    this.ceiling = c;
    const a = b - c / 2;
    this.C = a * a + h * h;
    }
    perimeter(){
        return Math.sqrt(this.C) + this.base + this.ceiling; 
    }
    area(){
        return this.base * this.ceiling * this.height / 2;
    }
}
class Rombo extends Shape{
    constructor(D, d ){
    super();
    this.Diagonal = D
    this.diagonal = d
    const a = D/2
    const b = d/2
    this.c = a * a + b * b;
    }
    perimeter(){
        return Math.sqrt(this.c)*4; 
    }
    area(){
        return this.Diagonal * this.diagonal / 2;
    }
}


export {Circle, Rectangle, Square, Triangle, Triangulo, Trapecio, Rombo};



