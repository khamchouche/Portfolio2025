// Fichier: src/app/models/experience.ts (ou experience-detail.ts)

export interface Experience {
    id: string;
    titre: string; // Nom de l'étape
    entreprise: string; // Lieu (ex: BUT, Eden Auto)
    date_debut: string;
    date_fin: string; // Peut être 'Présent' ou une date
    description: string;
    type: string; // Pour le style
}
