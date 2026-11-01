export const ROLES = [
  'client',
  'ecommerce_assistant',
  'it_support_specialist',
  'manager',
] as const;


export type RoleUser = typeof ROLES[number];

export const getRole = (role: string | undefined) => {
  if (role === undefined) return;

  const userRole: string | undefined = ROLES.find(ROLE => ROLE === role);

  return userRole;
}