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


console.log('-------------------');
console.log('-------------------');
console.log('-------------------');
console.log('KINTAMŲJŲ PALYGINIMAS');

const m = 0;

if ( m > 50 ) {
    console.log('7 yra daugiau uz 50');
} else {
    console.log('tas kitas variantas');
}

if ( m > 0 ) {
    console.log('Skaicius teigiamas');
} else {
    if ( m < 0 ) {
        console.log('Skaicius neigiamas');
    } else {
        console.log('As esu nulis');
    }
}

const akys = 'asdgh';

if ( akys === 'melynos') {
    console.log('Aha');
} else {
    if ( akys === 'zalios' ) {
        console.log('Jop');
    } else {
        if ( akys === 'rudos' ) {
            console.log('taip, rudos');
        } else {
            console.log('a tu turi akis?');
        }
    }
}

if ( akys === 'melynos' ) {
    console.log('melynos');
} else if ( akys === 'zalios' ) {
    console.log('Jop');
} else if ( akys === 'rudos' ) {
    console.log('taip, rudos');
} else {
    console.log('a tu turi akis?');
}

switch ( akys ) {
    case 'melynos':
        console.log('switch: melynos');
        break;
    
    case 'zalios':
        console.log('switch: zalios');
        break;
    
    case 'rudos':
        console.log('switch: rudos');
        break;

    default:
        console.log('switch: a tu turi akis?');
        break;
}


const a1 = 'a';
const a2 = 'av';

// vartotinos: >, <, ===, >=, <=, !==
// nevartotinos: ==, !=
if ( a1 < a2 ) {
    console.log( true );
} else {
    console.log( false );
}



// OR
const spalva = 'melyna';
if ( spalva === 'ruda' ||
     spalva === 'zalia' ||
     spalva === 'melyna' ) {
    console.log('taip, tavo spalva tikra');
} else {
    console.log('ar turi akis?');
}


console.log('-------------------');
console.log('-------------------');
console.log('-------------------');
console.log('CIKLAI');

let desimt = 100;
let asd = 100;

asd = asd + desimt++;

console.log(asd);
console.log(desimt);

console.log('-------------------');
console.log('SUMAVIMAS CIKLE');

let nuo = 0;
let iki = 10;
let nuoIkiSuma = 0;

for ( let i=nuo; i<=iki; i++ ) {
    nuoIkiSuma = nuoIkiSuma + i;
    console.log(i, '-', nuoIkiSuma);
}

console.log('Suma intervale nuo ' + nuo + ' iki ' + iki + ' yra lygi ' + nuoIkiSuma + '.');


console.log('-------------------');

const marks = [10, 8, 2, 4, 7, 5, 9];

for ( let i=0; i<marks.length; i++ ) {
    console.log( i, marks[i] );
}

console.log('-------------------');

const zodis = 'Labas rytas';

for ( let i=0; i<zodis.length; i++ ) {
    if ( zodis[i] !== ' ' ) {
        console.log( zodis[i] );
    }
}

console.log('-------------------');

const atbulas = 'Atbuliaiva';

for ( let i=atbulas.length-1; i>=0; i-- ) {
    console.log( atbulas[i] );
}

console.log('-------------------');

for ( let i=0; i<atbulas.length; i++ ) {
    console.log( atbulas[atbulas.length - i - 1] );
}

console.log('-------------------');
console.log('SUMAVIMAS CIKLE');

nuo = 0;
iki = 11;
let daliklis = 3;
let kartai = 0;

// suku cikla per skaiciu intervala
    // jeigu skaicius dalinasi be liekanos
        // kartai++

for ( let i=nuo; i<=iki; i++ ) {
    console.log(i, daliklis, i/3);
    if ( i % daliklis === 0 ) {
        kartai++;
    }
}

console.log('Skaičių intervale tarp ' + nuo + ' ir ' + iki + ', besidalinančių be liekanos iš ' + daliklis + ' yra ' + kartai + ' vienetai.');


nuo = 0;
iki = 11;
daliklis = 5;
kartai = 0;

for ( let i=nuo; i<=iki; i++ ) {
    if ( i % daliklis === 0 ) {
        kartai++;
    }
}

console.log('Skaičių intervale tarp ' + nuo + ' ir ' + iki + ', besidalinančių be liekanos iš ' + daliklis + ' yra ' + kartai + ' vienetai.');



nuo = 0;
iki = 11;
daliklis = 7;
kartai = 0;

for ( let i=nuo; i<=iki; i++ ) {
    if ( i % daliklis === 0 ) {
        kartai++;
    }
}

console.log('Skaičių intervale tarp ' + nuo + ' ir ' + iki + ', besidalinančių be liekanos iš ' + daliklis + ' yra ' + kartai + ' vienetai.');


console.log('-------------------');
console.log('-------------------');
console.log('-------------------');
console.log('FUNKCIJOS');

function tusciaFunkcija() {
    return false;
}

console.log( tusciaFunkcija() );

function sumavimas(pirmas, antras) {
    // console.log(pirmas, antras);
    
    return pirmas + antras;
}

console.log( sumavimas(11, 6) );


console.log('-------------------');
console.log('DAUGYBA');

function daugyba( pirmasSkaicius, antrasSkaicius ) {
    // prasukame patikrinimus
    const pirmojoTipas = typeof( pirmasSkaicius );
    const antrojoTipas = typeof( antrasSkaicius );

    // priciumpame skirtingus tipus (ne skaicius)
    if ( pirmojoTipas !== 'number' &&
         antrojoTipas !== 'number' ) {
        return 'Abi duotos reiksmes netinkamo tipo - duok skaicius.'
    }
    if ( pirmojoTipas !== 'number' ) {
        return 'Pirma duota reiksme netinkamo tipo - duok skaiciu.'
    }
    if ( antrojoTipas !== 'number' ) {
        return 'Antra duota reiksme netinkamo tipo - duok skaiciu.'
    }

    // net jei duotas skaicius, ar jis tikras?
    if ( ''+pirmasSkaicius === 'NaN' ) {
        return 'Pirma reiksme yra netikras skaicius.'
    }
    if ( ''+antrasSkaicius === 'NaN' ) {
        return 'Antra reiksme yra netikras skaicius.'
    }

    // kazkodel mums nereikia begalybiu - ismetam
    if ( pirmasSkaicius === Infinity ) {
        return 'Pirma reiksme negali buti begalybe.'
    }
    if ( antrasSkaicius === Infinity ) {
        return 'Antra reiksme negali buti begalybe.'
    }

    // jei nesvarbu kas jis NaN ar Inifinity
    if ( isFinite(pirmasSkaicius) === false ||
         isFinite(antrasSkaicius) === false ) {
        return 'Viena is reiksmiu yra netikras skaicius.'
    }

    // jeigu nenustateme nieko blogo, galim skaiciuoti
    return pirmasSkaicius * antrasSkaicius;
}

console.log( daugyba(3, 'a') );
console.log( daugyba('a', 15) );
console.log( daugyba('a', 'asd') );
console.log( daugyba('a', ['asd']) );
console.log( daugyba(2, [5]) );
console.log( daugyba(2, true) );
console.log( daugyba(3, NaN) );
console.log( daugyba(NaN, 15) );
console.log( daugyba(3, Infinity) );
console.log( daugyba(Infinity, 15) );

console.log( '3 * 16 = ', daugyba(3, 16) );
console.log( '3 * 15 = ', daugyba(3, 15) );
console.log( '-3 * 16 = ', daugyba(-3, 16) );
console.log( '3 * -15 = ', daugyba(3, -15) );


console.log('-------------------');
console.log('SKAITMENU KIEKIS SKAICIUJE');

function skaitmenuKiekisSkaiciuje( skaicius ) {
    // patikrinimai
    if ( typeof(skaicius) !== 'number' ||
         isNaN(skaicius) === true ) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }

    // logika, jei nieko blogo neradome
    const skaiciusTekstu = ''+skaicius;
    let ilgis = skaiciusTekstu.length;

    // tikrinu ar turi taska (kableli - desimtaine trupmena)
    if ( skaicius % 1 !== 0 ) {
        ilgis--;
    }

    // jei skaicius su minusu
    if ( skaicius < 0 ) {
        ilgis--;
    }

    return ilgis;
}

console.log( skaitmenuKiekisSkaiciuje( 'asd' ) );
console.log( skaitmenuKiekisSkaiciuje( true ) );
console.log( skaitmenuKiekisSkaiciuje( NaN ) );

console.log( skaitmenuKiekisSkaiciuje( 5 ) );
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
console.log( skaitmenuKiekisSkaiciuje( -67 ) );
console.log( skaitmenuKiekisSkaiciuje( 3.1415 ) );
console.log( skaitmenuKiekisSkaiciuje( -3.1415 ) );
console.log( skaitmenuKiekisSkaiciuje( 315, 4587 ) );

console.log( skaitmenuKiekisSkaiciuje( 0.000000001 ) );
console.log( skaitmenuKiekisSkaiciuje( 1e6 ) );

