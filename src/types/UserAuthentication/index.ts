export interface UserAuthenticationData {
  email: string;
  password: string;
}

export interface SignUpFormData extends UserAuthenticationData {
  confirmationPassword: string;
}
