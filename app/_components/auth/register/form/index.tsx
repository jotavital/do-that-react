'use client';

import { useRegisterForm } from '@/app/_hooks/forms/useRegisterForm';
import { Button } from '@/app/_components/shared/button';
import { Input } from '@/app/_components/shared/input';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

export const RegisterForm: React.FC = () => {
    const { onSubmit, register, errors } = useRegisterForm();

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <Input
                label="Seu Nome"
                id="name"
                placeholder="Jon Doe"
                errors={errors.name}
                {...register('name')}
            />

            <Input
                label="Seu E-mail"
                id="email"
                placeholder="jondoe@foo.com.br"
                errors={errors.email}
                {...register('email')}
            />

            <Button
                title="Crie minha conta"
                icon={<FaArrowRight className="text-md" />}
                type="submit"
            />
        </form>
    );
};
