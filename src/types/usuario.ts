/**
 * Tipos relacionados a Usuários
 */
 
export type TipoUsuario = "paciente" | "admin";
 
export interface Usuario {
 id: number;
 nome: string;
 email: string;
 senha?: string; // Opcional pois removemos após login
 cpf: string;
 telefone: string;
 perfil: TipoUsuario;
}

// Credenciais fixas para admin (em produção seria em backend)
export const ADMIN_CREDENTIALS = {
  email: "admin@consultas.com",
  senha: "admin123", // Em produção, seria hash
};
