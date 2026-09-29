export class ScrollManager {
    constructor(btnId = 'scrollBtn', iconId = 'scrollIcon') {
        this.scrollBtn = document.getElementById(btnId);
        this.scrollIcon = document.getElementById(iconId); // Tu elemento <img>
        this.threshold = 300;

        if (this.scrollBtn && this.scrollIcon) {
            this.init();
        }
    }

    init() {
        window.addEventListener('scroll', () => this.handleScroll());
        this.scrollBtn.addEventListener('click', () => this.handleClick());
    }

    handleScroll() {
        // Si tu SVG original apunta hacia abajo, lo rotamos 180 grados para que apunte hacia arriba
        if (window.scrollY > this.threshold) {
            this.scrollIcon.style.transform = 'rotate(180deg)';
        } else {
            this.scrollIcon.style.transform = 'rotate(0deg)';
        }
    }

    handleClick() {
        if (window.scrollY > this.threshold) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        }
    }
}