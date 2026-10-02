export class links {

    constructor(link1, link2, link3, link4, link5) {
        // Guardamos las variables
        // Guardamos los selectores de ID
        this.link1 = `#${link1}`;
        this.link2 = `#${link2}`;
        this.link3 = `#${link3}`;
        this.link4 = `#${link4}`;
        this.link5 = `#${link5}`;
    }

    // Método para renderizar según el ancho de la pantalla
    screen() {
        const homeLink = document.querySelector(this.link1);
        const aboutLink = document.querySelector(this.link2);
        const servicesLink = document.querySelector(this.link3);
        const portafolioLink = document.querySelector(this.link4);
        const contactLink = document.querySelector(this.link5);

        // Si el contenedor no existe en el DOM, detenemos la función de forma segura
        if (!homeLink || !aboutLink || !servicesLink || !portafolioLink || !contactLink) return;

        if (window.innerWidth >= 1024) {

            homeLink.href = "index.html";
            aboutLink.href = "about.html";
            servicesLink.href = "services.html";
            portafolioLink.href = "portafolio.html";
            contactLink.href = "contact.html";
        }
        if (window.innerWidth < 1024) {
            homeLink.href = "#";
            aboutLink.href = "#about";
            servicesLink.href = "#services";
            portafolioLink.href = "#portafolio";
            contactLink.href = "#contact ";

            ;
        }
    }
}