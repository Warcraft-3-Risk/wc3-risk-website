//TODO: Add the Admin type definitions here - This are made for testing purposes only
export interface Admin {
  id: string;
  username: string;
  email: string;
  role: AdminRole;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type AdminRole = "SUPER_ADMIN" | "ADMIN" | "MODERATOR";

export interface AdminPermissions {
  canManageUsers: boolean;
  canEditContent: boolean;
  canViewReports: boolean;
  canManageSettings: boolean;
}
