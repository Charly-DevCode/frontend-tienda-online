/**
 * Valida y parsea un string de la URL a un entero positivo.
 */
export const parsePositiveInt = (value: string | null, fallback: number): number => {
  const parsed = Number(value);
  if (isNaN(parsed) || parsed < 1) {
    return fallback;
  }
  return Math.floor(parsed);
};

/**
 * Sanitiza un string de búsqueda para evitar espacios vacíos extremos o caracteres extraños.
 */
export const parseStringParam = (value: string | null): string | undefined => {
  if (!value) return undefined;
  const trimmed = value.trim();
  return trimmed === '' ? undefined : trimmed;
};

/**
 * Valida si un string representa un booleano válido en la URL (ej: ?active=true)
 */
export const parseBooleanParam = (value: string | null, fallback: boolean): boolean => {
  if (value === 'true') return true;
  if (value === 'false') return false;
  return fallback;
};