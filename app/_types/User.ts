export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: null;
    created_at: string;
    updated_at: string;
}

export interface UserTokens {
    access_token: string;
}
