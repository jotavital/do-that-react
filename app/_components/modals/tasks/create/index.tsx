import React from 'react';
import { Input } from '@/app/_components/shared/input';
import { Button } from '@/app/_components/shared/button';
import { FaRegSave } from 'react-icons/fa';
import { useCreateTaskForm } from '@/app/_hooks/forms/tasks/useCreateTaskForm';
import { useTaskModalsContext } from '@/app/_contexts/task/modals';

export const CreateTaskModalContent = () => {
    const { createTaskMetadata } = useTaskModalsContext();
    const { register, onSubmit, errors, isSaving } = useCreateTaskForm({
        statusId: createTaskMetadata?.statusId,
    });

    return (
        <div className="p-3">
            <form className="space-y-5" onSubmit={onSubmit}>
                <Input
                    label="Nome"
                    {...register('name')}
                    errors={errors.name}
                />

                <div className={'flex justify-end'}>
                    <div className="w-6/12">
                        <Button
                            type="submit"
                            title="Criar"
                            icon={<FaRegSave />}
                            className="h-[2.5rem]"
                            isLoading={isSaving}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};
