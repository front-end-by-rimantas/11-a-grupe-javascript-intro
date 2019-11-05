// skaiciai - number
const PI = 3.141592654;
console.log( PI );

const nulis = 0;

// tekstai - string
const vardas = 'Rimantas';

let suo = "Aviganis";
console.log( suo );
suo = 'Coli';
console.log( suo );

// logines reiksmes - boolean
const tiesa = true;
console.log( tiesa );
const melas = false;
console.log( melas );

// sarasas - array
const skaiciai = [1, 2, 3, 4];
console.log( skaiciai );
let abc = ['a', 'b', 'c', "d", 'e'];
console.log( abc );

var kintamasis = 'as kintu :)';


const mixList = [1, 'antras', 3, 'forth', [6, 'seven']];
console.log( mixList );

// objektai - object
const zmogus = {
    name: 'Vardenis',
    surname: 'Pavardenis',
    age: 99
}
console.log(zmogus);

console.log('-------------------');
console.log('-------------------');
console.log('-------------------');
console.log('VEIKSMAI SU KINTAMAISIAIS');

const s1 = 5;
const s2 = 10;

const suma = s1 + s2;
console.log(suma);

const skirtumas = s1 - s2;
console.log(skirtumas);

const dalmuo = s1 / s2;
console.log(dalmuo);

const sandauga = s1 * s2;
console.log(sandauga);

const vidurkis = (s1 + s2) / 2;
console.log(vidurkis);

const vidurkioSaknis = Math.sqrt( vidurkis );
console.log(vidurkioSaknis);

const t1 = 'Labas';
const t2 = 'rytas';
const pasisveikinimas = t1 + t2;
console.log(pasisveikinimas);

const gerasPasisveikinimas = t1 + ' ' + t2;
console.log(gerasPasisveikinimas);

const numbers = [10, 7, -3, 4, 55, [1, 87]];
console.log( numbers );
console.log( numbers[0] );
console.log( numbers[5] );
console.log( numbers[5][1] );

const alter = numbers[0] - numbers[1] + numbers[2];
console.log(alter);
