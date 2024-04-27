import React, { Dispatch, SetStateAction } from 'react';

export interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    title?: string;
    handleCloseModal?: () => void;
}
