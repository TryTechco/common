import { Social } from "./social.example.interface";

export type Role = "admin" | "artist" | "user";

export interface User {
  id: string;
  name: string;
  role: Role;
  social?: Social;
  wallet_address?: string;
}
