import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET!;

// Función para autenticar JWT
export const authenticator = (token: string) => {
  try {
    // Verificar el token usando la clave secreta
    const decoded = jwt.verify(token, SECRET_KEY);
    return { valid: true, decoded };
  } catch (error) {
    return { valid: false, error: "No autenticado" };
  }
};
