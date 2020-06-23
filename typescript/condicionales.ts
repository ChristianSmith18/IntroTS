ifConditional('pera');
switchConditional('manzana');

/* IF - ELSE IF - ELSE */
function ifConditional(fruta: string) {
  if (fruta === 'manzana') {
    console.error('Soy una manzana');
  } else if (fruta === 'pera') {
    console.log('Soy una pera');
  } else {
    console.log('No soy ni manzana ni pera!');
  }
}

/* SWITCH CASE */
function switchConditional(fruta: string) {
  switch (fruta) {
    case 'manzana':
      console.log('Soy una manzana');
      break;

    case 'pera':
      console.log('Soy una pera');
      break;

    default:
      console.log('No soy ni manzana ni pera!');
      break;
  }
}

/* COMENTARIOS */

// De una línea
/*  De multiples 
    líneas */
/**
 * De documentación
 */

/* TERNARIOS */
const edad = 10;
let banner = '';
if (edad >= 18) {
  banner = 'Soy mayor de edad';
} else {
  banner = 'Soy menor de edad';
}

// Se reemplaza por:
const banner2 =
  edad >= 18 ? (banner = 'Soy mayor de edad') : (banner = 'Soy menor de edad');

console.log('Banners:', banner, banner2);

/* DEBUGGER */

debugger;
console.log('hola');
