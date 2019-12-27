export interface UserAuthenticationData {
  email: string;
  password: string;
  confirmationPassword?: string;
}

export type AuthenticationState =
  | "SIGNING_IN"
  | "SIGNED_IN"
  | "SIGNING_UP"
  | "SIGNED_UP"
  | "SIGNED_OUT";
