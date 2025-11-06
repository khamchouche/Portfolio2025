// Fichier: src/app/models/projet.ts

export interface Projet {
    id?: string;
    titre: string;
    description: string;
    url?: string;
    chemin_image?: string; // URL de l'image stockée
}