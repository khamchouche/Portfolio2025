// Fichier: src/app/models/competence.ts

export interface Competence {
    id?: string;
    nom: string;
    type: 'douce' | 'technique'; // Types français
    niveau?: number; // Niveau sur 100 (optionnel)
}