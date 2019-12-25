export interface UserAuthenticationFormData {
  email: string;
  password: string;
}

export interface SignUpFormData extends UserAuthenticationFormData {
  confirmationPassword: string;
}
