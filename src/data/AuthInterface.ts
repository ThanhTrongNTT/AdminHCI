export interface RegisterDTO {
    email: string;
    password: string;
}
export interface LoginDTO {
    email: string;
    password: string;
}
export interface ConfirmEmailDTO {
    token: string;
}
export interface UpdatePasswordDTO {
    newPassword: string;
    oldPassword: string;
}
export interface UpdateAccountDTO {
    email: string;
    address: string;
    fullName: string;
    phoneNumber: string;
    gender: string;
}
export interface ForgotPasswordDTO {
    email: string;
}
export interface ResetPasswordDTO {
    password: string;
}

export interface LogoutDTO {
    id: string;
}
