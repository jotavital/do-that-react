'use client';

import { AuthContextValue } from '@/app/_contexts/auth/types';
import { User } from '@/app/_types/User';
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

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    return useContext(AuthContext);
};
