// Fichier: src/app/models/competence-detail.ts (Mise à jour)

export interface SkillItem {
    id: string;
    nom: string;
    type: string; // Ex: 'langage', 'framework', 'methodologie', 'humaine', 'langue_parlee'
    logo_url?: string; // Utilisé pour les logos
    detail?: string; // Pour les langues par exemple
}
// SkillCategory n'est plus utilisé directement dans le composant Compétences.