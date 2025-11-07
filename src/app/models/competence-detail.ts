// Fichier: src/app/models/competence-detail.ts (CORRIGÉ)

export interface SkillItem {
    id: string;
    nom: string;
    type: string;
    
    // 🛑 PROPRIÉTÉS OBLIGATOIRES 🛑
    description: string; // ⬅️ AJOUTÉ : Pour résoudre les erreurs TS2741
    
    // 🛑 PROPRIÉTÉS OPTIONNELLES (que vous utilisez dans le code) 🛑
    logo_url?: string;
    project_link?: string;
    iconClass?: string; // ⬅️ AJOUTÉ : Pour résoudre les erreurs TS2353 (Font Awesome/Icônes)
    detail?: string;    // ⬅️ AJOUTÉ : Pour résoudre les erreurs TS2353 (Langues)
}