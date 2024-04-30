'use client';

import { SignInFormHeader } from '@/app/_components/auth/signin/form/header';
import { useSignInForm } from '@/app/_hooks/forms/useSignInForm';
import { Button } from '@/app/_components/shared/button';
import { Input } from '@/app/_components/shared/input';
import { SignInFormSteps } from '@/app/_types/Form';
import { preventSubmitOnEnter } from '@/app/_utils/form';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

export const SignInForm: React.FC = () => {
    const {
        formMethods: {
            register,
            formState: { errors },
            getValues,
        },
        currentStep,
        handleGoToNextStep,
        handleGoToPreviousStep,
        isSendingAuthenticationCode,
    } = useSignInForm();

    return (
        <form className="flex flex-col gap-9" onKeyDown={preventSubmitOnEnter}>
            <SignInFormHeader />

            {currentStep === SignInFormSteps.EMAIL.valueOf() ? (
                <Input
                    label="E-mail"
                    id="email"
                    placeholder="jondoe@foo.com.br"
                    errors={errors.email}
                    {...register('email')}
                    key={'email'}
                />
            ) : currentStep ===
              SignInFormSteps.AUTHENTICATION_CODE.valueOf() ? (
                <div className="flex flex-col gap-3">
                    <Input
                        label="Código de Acesso"
                        id="authentication_code"
                        placeholder="123456"
                        errors={errors.authentication_code}
                        {...register('authentication_code')}
                        key={'authentication_code'}
                        maxLength={6}
                    />
                    <p className="text-sm">
                        Digite o código que enviamos para{' '}
                        <span className="text-primary">
                            {getValues('email') ?? 'okokoko@g.com'}
                        </span>
                    </p>
                </div>
            ) : null}

            <div className="flex gap-2 ">
                {currentStep !== SignInFormSteps.EMAIL.valueOf() && (
                    <Button
                        title="Voltar"
                        type="button"
                        color="none"
                        className="font-semibold text-red-500 w-1/2"
                        onClick={() => handleGoToPreviousStep()}
                    />
                )}
                <Button
                    title="Fazer o Login"
                    icon={<FaArrowRight className="text-md" />}
                    type="button"
                    onClick={() => handleGoToNextStep()}
                    isLoading={isSendingAuthenticationCode}
                />
            </div>
        </form>
    );
};
