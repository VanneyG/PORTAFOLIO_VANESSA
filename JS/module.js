// module.js
import { setupDynamicBurgerMenu } from './data/info.js';
import { ColorMenu } from './data/color.js';

document.addEventListener('DOMContentLoaded', () => {
    setupDynamicBurgerMenu();
});






document.addEventListener('DOMContentLoaded', () => {
    // Instanciamos la clase apuntando a tu imagen .logo_color
    const menu = new ColorMenu('.logo_color');
    menu.render();
});