// Fichier: src/app/models/experience.ts

export interface Experience {
    id?: string;
    titre: string; // Poste
    entreprise: string;
    date_debut: Date | string;
    date_fin?: Date | string; // Optionnel si l'expérience est en cours
    description: string;
}