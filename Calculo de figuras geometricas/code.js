


//codigo del cuadrado

/*console.group("Datos cuadrado");
const ladoCuadrado = 5;
console.log(`los lados del cuadrado miden: ${ladoCuadrado} centimetros`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`el perimetro del cuadrado mide: ${perimetroCuadrado} centimetros`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`el area del cuadrado mide: ${areaCuadrado} centimetros cuadrados`);
console.groupEnd();

//codigo del triangulo

console.group("Datos triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTriangulo3 = 4;
const alturaTriangulo = 5.5;

const baseTriangulo = 4; 
console.log(`los lados del triangulo miden: ${ladoTriangulo1}, ${ladoTriangulo2}, ${ladoTriangulo3} centimetros`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3;
console.log(`el perimetro del triangulo mide: ${perimetroTriangulo} centimetros`);

const areaTriangulo = (alturaTriangulo * baseTriangulo) / 2;
console.log(`el area del Triangulo mide: ${areaTriangulo} centimetros cuadrados`);
console.groupEnd();

//codigo de circulo

console.group("Datos circulo");
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const pi = Math.PI;

const perimetroCirculo = diametroCirculo * pi;
console.log(`el perimetro del circulo es: ${perimetroCirculo}`)

const areaCirculo = (radioCirculo * radioCirculo) * pi;
console.log(`el area del circulo es: ${areaCirculo}`)
console.groupEnd();*/

//Funciones cuadrado

console.group("funcion cuadrado");

function perimetroCuadrado2 (lado){
    return (lado * 4);
};

function areaCuadrado2 (lado){
    return (lado * lado);
};

console.groupEnd();

//funciones Triangulo

console.group("Funcion triangulo");

function perimetroTriangulo2 (lado1, lado2, lado3){
    return (lado1 + lado2 + lado3);
};

function areaTriangulo2 (lado1, lado2, lado3){
    const sPerimetro = ((lado1 + lado2 + lado3) / 2);
    console.log(sPerimetro);
    const areaCuarta = (sPerimetro * (sPerimetro - lado1) * (sPerimetro - lado2) * (sPerimetro - lado3));
    if (areaCuarta < 0){
        return ("Desigualdad triangular, porfavor verifica los lados de tu triangulo")
    }
    return Math.sqrt(areaCuarta);
};

console.groupEnd();

//funciones circulo


console.group("Funciones Circulo");

function perimetroCirculo2 (radio){
    return ((radio * 2) * Math.PI)
};

function areaCirculo2 (radio){
    return ((radio * radio) * Math.PI)
};

//interaccion con html

//Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado2(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado2(value);
    alert(area);
}

//Triangulo

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const input2 = document.getElementById("InputTriangulo2");
    const base = document.getElementById("InputBaseTriangulo");
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(base.value);
    const perimetro = perimetroTriangulo2(value1,value2,value3);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const input2 = document.getElementById("InputTriangulo2");
    const base = document.getElementById("InputBaseTriangulo");
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(base.value);
    const area = areaTriangulo2(value1,value2,value3);
    alert(area);
}

//Circulo

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo2(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo2(value);
    alert(area);
}