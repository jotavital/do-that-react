'use client';

import { AuthContextValue } from '@/app/_contexts/AuthContext/types';
import { User } from '@/app/_models/User';
import { createContext, ReactNode, useContext, useState } from 'react';

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User>();

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('Trying to use AuthContext out of provider');
    }

    return context;
};
