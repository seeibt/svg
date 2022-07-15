class Icones {
    constructor(){
        this.listaIcones = document.querySelectorAll('.icone');
    }

    animaIcones(){ 
        TweenMax.to(this.listaIcones, 0.5, {scale: 0.95, yoyo: true, repeat: -1});
    }
}

export { Icones }