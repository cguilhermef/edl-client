export interface AuthenticatedUser {
  avatar: string;
  name: string;
  email: string;
  is_admin: boolean;
  language_id: number;
  token: string;
}
