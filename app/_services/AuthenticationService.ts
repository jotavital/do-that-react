'use client';

import { api } from '@/app/_lib/axios';
import {
    SendAuthenticationCodeResponse,
    SignInProps,
    SignInResponse,
} from '@/app/_types/Authentication';
import { setCookie } from 'cookies-next';

export class AuthenticationService {
    static signIn = async (data: SignInProps) => {
        const { data: response } = await api
            .post<SignInResponse>(`login`, {
                email: data.email,
                authentication_code: data.authentication_code,
            })
            .catch();

        const accessToken = response.tokens.access_token;

        setCookie(
            process.env.NEXT_PUBLIC_ACCESS_TOKEN ?? 'dothat@accessToken',
            accessToken,
        );

        api.defaults.headers['Authorization'] = `Bearer ${accessToken}`;

        return response;
    };

    static sendAuthenticationCode = async (email: string) => {
        try {
            if (!email) {
                return false;
            }

            const codeSent = await api
                .get<SendAuthenticationCodeResponse>(
                    `send-authentication-code?email=${email}`,
                )
                .then((r) => r.data.success);

            return codeSent;
        } catch (error) {
            console.error(error);
            return false;
        }
    };
}
