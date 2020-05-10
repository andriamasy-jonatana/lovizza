export default class Pizza {
    id: string;
    nom: string;
    prix: string;
    ingredients: [];
    photo: string;

    constructor(id: string, nom: string, prix: string, ingredients: [], photo: string) {
        this.id = id;
        this.nom = nom;
        this.prix = prix;
        this.ingredients = ingredients;
        this.photo = photo;
    }
}
