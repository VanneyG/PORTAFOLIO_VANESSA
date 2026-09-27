export class ColorMenu {
    // Array privado con los 4 pares de colores requeridos
    #colors = [
        { backgroundcolor: '#FFF9F0', contain_color: '#FFFDFA' }, // Tono blanco
        { backgroundcolor: '#F3A024', contain_color: '#FEBC59' }, // Tono naranja
        { backgroundcolor: '#25AA9F', contain_color: '#4FC0B7' }, // Tono azul/verde
        { backgroundcolor: '#8D8A8C', contain_color: '#A6A0A4' }  // Tono gris
    ];

    constructor(selector) {
        this.selector = selector; //logo_color is the name of the img
    }

    render() {
        // Seleccionamos la imagen usando el selector (.logo_color)
        const triggerElement = document.querySelector(this.selector);
        if (!triggerElement) return;

        // Creamos la lista (ul) para los botones
        const listColor = document.createElement('ul');
        listColor.classList.add('color-menu-list'); // giving a nameto ul

        this.#colors.forEach(colorPair => {
            const listItem = document.createElement('li');
            const btnBg = document.createElement('button');

            // Estilos directos para pintar el círculo con su respectivo background
            btnBg.style.backgroundColor = colorPair.backgroundcolor;
            btnBg.classList.add('color-btn');

            // Evento click para cambiar los colores de la página y la sección
            btnBg.addEventListener('click', (event) => {
                event.stopPropagation(); // Evita que se cierre inmediatamente el menú
                this.#applyColors(colorPair.backgroundcolor, colorPair.contain_color);
                listColor.classList.remove('active'); // Oculta el menú tras seleccionar
            });

            listItem.append(btnBg);
            listColor.append(listItem);
        });

        // Coloca la lista 'ul' justo debajo de la imagen, dentro de <section id="container_color">
        triggerElement.insertAdjacentElement('afterend', listColor);

        // Control de visibilidad (Toggle) al hacer click sobre el ícono de la paleta
        triggerElement.addEventListener('click', (event) => {
            event.stopPropagation();
            listColor.classList.toggle('active');
        });

        // Cierra la lista si el usuario hace click en cualquier otro lado de la pantalla
        document.addEventListener('click', () => {
            listColor.classList.remove('active');
        });
    }

    // Método privado para aplicar los cambios de color de fondo
    #applyColors(bgColor, containerColor) {
        // Cambia el color de fondo de toda la página
        document.body.style.backgroundColor = bgColor;





        // Cambia el color de fondo del contenedor según tu nueva estructura HTML
        const sectionContainer = document.querySelector('#container'); // creo que aqui deberia ser #container.
        if (sectionContainer) {
            sectionContainer.style.backgroundColor = containerColor;
        }
    }
}