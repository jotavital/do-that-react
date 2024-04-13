'use client';

import { AuthContextValue } from '@/app/_contexts/auth-context/types';
import { User } from '@/app/_models/User';
import { AuthenticationService } from '@/app/_services/AuthenticationService';
import { createContext, ReactNode, useContext, useState } from 'react';

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | undefined>(
        JSON.parse(
            String(
                localStorage.getItem(
                    process.env.NEXT_PUBLIC_USER_KEY ?? 'dothat@user',
                ),
            ),
        ) as User,
    );

    if (!user) {
        AuthenticationService.signOut();
    }

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('Trying to use auth-context out of provider');
    }

    return context;
};
