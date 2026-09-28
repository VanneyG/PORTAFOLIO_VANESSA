export class indhold {

    constructor(selector) {
        // Guardamos el selector (ej: '.indhold') en una propiedad de la clase
        this.selector = selector;
    }

    // Método para renderizar según el ancho de la pantalla
    screen() {
        const contenedor = document.querySelector(this.selector);

        // Si el contenedor no existe en el DOM, detenemos la función de forma segura
        if (!contenedor) return;

        if (window.innerWidth >= 1024) {
            // Eliminamos el "if (contenedor)" redundante porque ya lo validamos arriba
            contenedor.innerHTML = `
                <div class="text">
                  <p class="hello"><b>Hello, my name is </b></p>
                  <p class="name"><b>Vanessa G.Neyra </b></p>
                  <p class="introduction"><b>I'm a </b></p>
                  <p class="uddannelse"><b>Graphic Designer </b></p>
                  <p>I’m a web designer, excited about creating graphic design, website design , and many more...</p>
                  <input type="button" value="More about me ->" class="bttn-about">
                </div>

                <div class="profile_picture">
                  <img src="IMG/SVG/foto_portafolio_withForms.svg" aria-label="PROFILE PHOTO" id="profile_photo">
                </div>
            `;
        } else {
            contenedor.innerHTML = `
                <div class="text">
                  <p class="hello"><b>Hello, my name is </b></p>
                  <p class="name"><b>Vanessa G.Neyra </b></p>
                  <p class="introduction"><b>I'm a </b></p>
                  <p class="uddannelse"><b>Graphic Designer </b></p>
                </div>
                
                <div class="profile_picture">
                  <img src="IMG/SVG/foto_portafolio_withForms.svg" aria-label="PROFILE PHOTO" id="profile_photo">
                </div>
                
                <div class="text2">
                  <p>I’m a web designer, excited about creating graphic design, website design , and many more...</p>
                  <input type="button" value="More about me ->" class="bttn-about">
                </div>
            `;
        }
    }
}
