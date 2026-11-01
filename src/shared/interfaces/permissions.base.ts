export interface PermissionItem {
  key: string;
  name: string;
  icon: string;
  link: string;
  actions: string[]; // o tu tipo PermissionAction[]
}

export type AdminPermissionsMap = Record<string, PermissionItem>;