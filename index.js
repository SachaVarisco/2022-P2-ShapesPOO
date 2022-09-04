import {Circle, Rectangle, Square, Triangle, Triangulo, Trapecio, Rombo} from './Shapes.js';

const triangle = new Triangle(10, 5);
const triangulo = new Triangulo(9, 6, 10);
console.log(triangle.Eso());
console.log(triangulo.Eso());

const square = new Square(10);
console.log(square.Eso())

const rectangle = new Rectangle(10, 10);
console.log(rectangle.Eso);


const circle = new Circle(10);
console.log(circle.Eso());

const trapecio = new Trapecio(20, 10, 12);
console.log(trapecio.Eso());

const rombo = new Rombo(20, 10);
console.log(rombo.Eso());
