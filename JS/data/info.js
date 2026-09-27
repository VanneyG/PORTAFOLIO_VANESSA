
// burger menu
export function setupDynamicBurgerMenu() {
    const burgerBtn = document.getElementById('burger-btn');
    const originalNavLinks = document.querySelector('.nav-links');

    if (!burgerBtn || !originalNavLinks) return;

    burgerBtn.addEventListener('click', (e) => {
        // Evita cualquier comportamiento heredado del click
        e.stopPropagation();

        let dynamicMenu = document.getElementById('dynamic-burger-menu');

        if (dynamicMenu) {
            dynamicMenu.remove();
        } else {
            // Clona la lista original (con sus li y enlaces a)
            dynamicMenu = originalNavLinks.cloneNode(true);

            // Forzamos el ID único para que apliquen los estilos CSS
            dynamicMenu.id = 'dynamic-burger-menu';

            // Insertamos el elemento clonado justo después del botón
            burgerBtn.after(dynamicMenu);
        }
    });
}











