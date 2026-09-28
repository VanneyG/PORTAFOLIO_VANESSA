export class ColorMenu {
    // Array privado con los 4 pares de colores requeridos
    #colors = [
        { backgroundcolor: '#FFF9F0', contain_color: '#FFFDFA' }, // Tono blanco
        { backgroundcolor: '#F3A024', contain_color: '#FEBC59' }, // Tono naranja
        { backgroundcolor: '#25AA9F', contain_color: '#4FC0B7' }, // Tono azul/verde
        { backgroundcolor: '#8D8A8C', contain_color: '#A6A0A4' }  // Tono gris
    ];

    // Variable para guardar el color actual activo (empezamos con el primero por defecto)
    #activeBgColor = '#FFF9F0';

    constructor(selector) {
        this.selector = selector; //logo_color is the name of the img
    }

    render() {
        // Seleccionamos la imagen usando el selector (.logo_color)
        const triggerElement = document.querySelector(this.selector);
        if (!triggerElement) return;

        // Creamos la lista (ul) para los botones
        const listColor = document.createElement('ul');
        listColor.classList.add('color-menu-list'); // giving a name to ul

        this.#colors.forEach(colorPair => {
            const listItem = document.createElement('li');
            const btnBg = document.createElement('button');

            // Estilos directos para pintar el círculo con su respectivo background
            btnBg.style.backgroundColor = colorPair.backgroundcolor;
            btnBg.classList.add('color-btn'); // llamando la clase del botton color-btn



            // Guardamos el color directamente en el elemento como un atributo personalizado
            btnBg.dataset.color = colorPair.backgroundcolor;


            // Evento click para cambiar los colores de la página y la sección
            btnBg.addEventListener('click', (event) => {
                event.stopPropagation(); // Evita que se cierre inmediatamente el menú

                // 1. Actualizamos el color activo guardado
                this.#activeBgColor = colorPair.backgroundcolor;

                this.#applyColors(colorPair.backgroundcolor, colorPair.contain_color); // function created 



                // 3. Ocultamos el botón actual y mostramos los demás
                this.#updateButtonVisibility(listColor);


                listColor.classList.remove('active'); // Oculta el menú tras seleccionar
            });



            listItem.append(btnBg); // botones se anaden a la lista (li)


            listColor.append(listItem); // las li se anaden al UL
        });



        // Ejecutar al inicio para ocultar el botón por defecto
        this.#updateButtonVisibility(listColor);
        triggerElement.parentNode.insertBefore(listColor, triggerElement.nextSibling);




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


    // Nueva función encargada de evaluar y ocultar el botón correspondiente
    #updateButtonVisibility(listElement) {
        // Buscamos todos los botones dentro de la lista
        const buttons = listElement.querySelectorAll('.color-btn');

        buttons.forEach(btn => {
            // Comparamos usando el color guardado en formato Hex
            if (btn.dataset.color === this.#activeBgColor) {
                btn.style.display = 'none'; // Oculta el botón actual
            } else {
                btn.style.display = 'inline-block'; // Muestra los demás botones
            }
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