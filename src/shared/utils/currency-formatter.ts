export const currencyFormatter = (value: number | string): string => {
  // Convertimos el valor a número (si es string lo parsea, si ya es number lo deja igual)
  const numericValue = typeof value === 'string' ? parseFloat(value) : value;

  // Validamos si es un número válido (por si viene vacío, null o texto extraño)
  if (isNaN(numericValue)) {
    return '$0,00'; // O puedes retornar un string vacío "" o "N/A" según prefieras
  }

  return numericValue.toLocaleString('es-ES', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2,
  });
}