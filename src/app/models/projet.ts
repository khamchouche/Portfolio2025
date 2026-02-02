// Fichier: src/app/models/projet.ts (CORRIGÉ)

export interface Projet {
    carousel_images: string[];
    id?: string;
    titre: string;
    type: string;
    description_sommaire: string; 
    description_complete: string; 
    duree: string; 
    contexte: string; 
    technologies: string[]; 
    youtube_url?: string; 

    
    // 🛑 CORRECTION CRITIQUE : AJOUT DE LA PROPRIÉTÉ MANQUANTE
    image_url: string; 
}