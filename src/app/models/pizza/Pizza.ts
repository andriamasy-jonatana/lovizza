export default class Pizza {
    id: string;
    nom: string;
    prix: number;
    photo: string;
    ingredient: [];

    constructor(id: string, nom: string, prix: number, photo: string, ingredient: []) {
        this.id = id;
        this.nom = nom;
        this.prix = prix;
        this.photo = photo;
        this.ingredient = ingredient;
    }
}
