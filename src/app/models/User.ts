
/**
 * Cette classe represente un utilisateur.
 * Elle permet de typer nos variables en etant sur qu'elles posséde bien les
 * propriétés d'un utilisateur.
 */
export class User {
    nom: string;
    prenom: string;
    age: number;
    adresse: Adresse;
    chats: string[];
}

/**
 * Cette classe represente une adresse postal.
 */
export class Adresse {
    numero: number;
    rue: string;
    codePostal: number;
}