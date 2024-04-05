import { User } from '@/app/_models/User';
import { Dispatch, SetStateAction } from 'react';

export interface AuthContextValue {
    user?: User;
    setUser: Dispatch<SetStateAction<User | undefined>>;
}
