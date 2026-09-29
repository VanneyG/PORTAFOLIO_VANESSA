// module.js
import { setupDynamicBurgerMenu } from './data/info.js';
import { ColorMenu } from './data/color.js';
import { indhold } from './data/indhold.js';
import { links } from './data/links.js';

document.addEventListener('DOMContentLoaded', () => {
    setupDynamicBurgerMenu();
});

/*---------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', () => {
    // Instanciamos la clase apuntando a tu imagen .logo_color
    const menu = new ColorMenu('.logo_color');
    menu.render();
});
/*--------------------------------------------------------*/

/* start side*/
const seccionPrincipal = new indhold('.indhold');

// 2. Ejecutar el método al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    seccionPrincipal.screen();
});

// 3. Ejecutar el método cuando el usuario cambie el tamaño de la pantalla
window.addEventListener('resize', () => {
    seccionPrincipal.screen();
});

/*--------------------------------*/

const misLinks = new links('home', 'about', 'services', 'portafolio', 'contact');

window.addEventListener('DOMContentLoaded', () => {
    misLinks.screen();
});

window.addEventListener('resize', () => {
    misLinks.screen();
});

/*--------------------------------------*/