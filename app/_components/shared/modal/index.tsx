import { IconButton } from '@/app/_components/shared/button/icon-button';
import { IoClose } from 'react-icons/io5';
import ReactModal from 'react-modal';
import React from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '@/tailwind.config';
import { ModalProps } from '@/app/_components/shared/modal/types';

const { theme } = resolveConfig(tailwindConfig);

export const Modal: React.FC<ModalProps> = ({
    children,
    isOpen = false,
    setIsOpen,
    title,
    handleCloseModal,
}: ModalProps) => {
    const closeModal = () => {
        setIsOpen && setIsOpen(false);

        handleCloseModal && handleCloseModal();
    };

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '0.5rem',
                    width: '50vw',
                    padding: 0,
                    borderColor: theme.colors.slate['300'],
                    boxShadow: theme.boxShadow.lg,
                },
            }}
            contentLabel={`${title} Modal`}
            closeTimeoutMS={250}
        >
            <div>
                <div className="pl-3 flex flex-row justify-between items-center min-h-10">
                    <div className="w-11/12 flex items-center">
                        {title && <h1 className="text-lg ">{title}</h1>}
                    </div>

                    <div className="w-1/12">
                        <IconButton
                            icon={<IoClose className="text-xl" />}
                            callback={closeModal}
                        />
                    </div>
                </div>

                {children}
            </div>
        </ReactModal>
    );
};
