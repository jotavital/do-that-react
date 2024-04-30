import { User } from '@/app/_types/User';
import { Dispatch, SetStateAction } from 'react';

export interface AuthContextValue {
    user?: User;
    setUser: Dispatch<SetStateAction<User | undefined>>;
}
