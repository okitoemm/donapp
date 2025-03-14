/**
 * Types pour les utilisateurs
 */
export interface Utilisateur {
  id: string;
  nom: string;
  email: string;
  dateInscription: string;
}

/**
 * Types pour les associations
 */
export interface Association {
  id: string;
  nom: string;
  description: string;
  urlLogo: string;
  categorie: string;
}

/**
 * Types pour les dons
 */
export interface Don {
  id: string;
  montant: number;
  utilisateurId: string;
  associationId: string;
  date: string;
  statut: 'en_attente' | 'complete' | 'annule';
  estRecurrent: boolean;
}

/**
 * Types pour l'état de l'authentification
 */
export interface EtatAuth {
  utilisateur: Utilisateur | null;
  estConnecte: boolean;
  token: string | null;
}
