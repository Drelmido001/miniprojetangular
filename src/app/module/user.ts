export interface User {
  id?: number;
  username: string;
  email: string;
  password: string;
  role?: 'candidat' | 'entreprise' ; // Définir le rôle comme candidat ou entreprise
  cv?: any; // Champ optionnel pour d'autres informations
}


