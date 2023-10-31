class Pokenea{
    static numberPokeneas = 0;

    static pokeneasList = [
        new Pokenea("Pikachu", 0.4, "Electricidad Estática", "https://storage.googleapis.com/pokeneas_pictures/pikachu.png", "Pikachu siempre lleva una pila de chuzos en su mochilita, ¡pilas que no te den un choque eléctrico!"),
        new Pokenea("Charizard", 1.7, "Llamas Furiosas", "https://storage.googleapis.com/pokeneas_pictures/charizard.png", "Charizard sube más alto que el Cerro de las Tres Cruces, y su fuego es más caliente que una buena cazuela."),
        new Pokenea("Machamp", 1.6, "Agallas", "https://storage.googleapis.com/pokeneas_pictures/machamp.png", "Machamp es tan fuerte que puede cargar un costal de café con una mano y bailar un buen perreo con la otra."),
        new Pokenea("Ludicolo", 1.5, "Danza Lluvia", "https://storage.googleapis.com/pokeneas_pictures/ludicolo.png", "Ludicolo siempre lleva un sombrero vueltiao y hace una fiesta con su danza bajo la lluvia de Medallo."),
        new Pokenea("Gengar", 1.5, "Levitación", "https://storage.googleapis.com/pokeneas_pictures/gengar.png", "Gengar se esconde en las sombras del Parque Lleras y asusta a los rumberos paisas."),
        new Pokenea("Tropius", 2.0, "Clorofila", "https://storage.googleapis.com/pokeneas_pictures/tropius.png", "Tropius es el único Pokémon que se da un banano maduro de camino pal Poblao."),
        new Pokenea("Sudowoodo", 1.2, "Efecto Espora", "https://storage.googleapis.com/pokeneas_pictures/sudowoodo.png", "Sudowoodo es tan rígido como un aguacate verde.")
    ];

    constructor(name,height,ability,image,iconicPhrase){
        this.id = ++Pokenea.numberPokeneas;
        this.name = name;
        this.height = height;
        this.ability = ability;
        this.image = image;
        this.iconicPhrase = iconicPhrase;
    }

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    getHeight(){
        return this.height;
    }

    getAbility(){
        return this.ability;
    }

    getImage(){
        return this.image;
    }

    getIconicPhrase(){
        return this.iconicPhrase;
    }

    setName(name){
        this.name = name;
    }

    setHeight(height){
        this.height = height;
    }

    setAbility(ability){
        this.ability = ability;
    }

    setImage(image){
        this.image = image;
    }

    setIconicPhrase(iconicPhrase){
        this.iconicPhrase = iconicPhrase;
    }
}

module.exports = Pokenea;