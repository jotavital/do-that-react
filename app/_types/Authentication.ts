import zod from '@/app/_lib/zod';
import { User, UserTokens } from '@/app/_types/User';

export interface SendAuthenticationCodeResponse {
    success: boolean;
}

export const SignInSchema = zod.object({
    email: zod.string().min(1).email(),
    authentication_code: zod.string().min(6),
});

export type SignInProps = zod.infer<typeof SignInSchema>;

export interface SignInResponse {
    user: User;
    tokens: UserTokens;
}
