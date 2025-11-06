// Fichier: src/app/models/competence-detail.ts

export interface SkillItem {
    id: string;
    nom: string;
    type: string;
    logo_url?: string;
    iconClass?: string; 
    detail?: string; 
    
    project_link?: string; // ⬅️ AJOUTÉ : Lien vers un projet (pour le routerLink)
}
// Note : Si vous n'utilisez pas de type SkillCategory, vous pouvez le retirer.