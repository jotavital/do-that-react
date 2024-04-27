'use client';

import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';
import { TaskContextValue } from '@/app/_contexts/task/types';
import { useStatusMutations } from '@/app/_hooks/mutations/statuses/useStatusMutations';
import { DropResult } from 'react-beautiful-dnd';
import { useStatusQueries } from '@/app/_hooks/queries/status/useStatusQueries';
import { Status } from '@/app/_models/Status';
import { arrayMoveImmutable } from 'array-move';
import { hasNotMoved } from '@/app/_utils/drag-and-drop';
import { Task } from '@/app/_models/Task';
import { TaskModalsProvider } from '@/app/_contexts/task/modals';

const TaskContext = createContext<TaskContextValue>({} as TaskContextValue);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const { rearrangeTasksMutation } = useStatusMutations();
    const isMovingTask = rearrangeTasksMutation.isPending;
    const { fetchAllStatusesQuery } = useStatusQueries();
    const { data: statusesResponse, isFetching: isFetchingStatuses } =
        fetchAllStatusesQuery;
    const [statuses, setStatuses] = useState<Status[] | undefined>(
        statusesResponse?.data,
    );

    const handleDragEnd = async (result: DropResult) => {
        if (statuses === undefined) return;

        const {
            destination,
            source: { index: sourceIndex, droppableId: sourceDroppableId },
        } = result;

        if (!destination) return;

        const { droppableId: destinationDroppableId, index: destinationIndex } =
            destination;

        if (
            hasNotMoved(
                sourceIndex,
                destinationIndex,
                sourceDroppableId,
                destinationDroppableId,
            )
        ) {
            return;
        }

        const sourceStatusId = sourceDroppableId.split('droppable-status-')[1];
        const destinationStatusId =
            destinationDroppableId.split('droppable-status-')[1];

        const sourceStatusIndex = statuses.findIndex(
            (status) => status._id === sourceStatusId,
        );
        const sourceTasks = statuses[sourceStatusIndex].tasks;

        if (sourceDroppableId === destinationDroppableId) {
            const reorderedTasks = arrayMoveImmutable(
                sourceTasks,
                sourceIndex,
                destinationIndex,
            );

            await moveTaskInSameStatus(
                sourceStatusId,
                reorderedTasks,
                sourceStatusIndex,
            );
        } else {
            const taskToMove = sourceTasks[sourceIndex];
            const destinationStatusIndex = statuses.findIndex(
                (status) => status._id === destinationStatusId,
            );
            const newDestinationTasks = [
                ...statuses[destinationStatusIndex].tasks,
            ];
            const newSourceTasks = [...sourceTasks];

            newSourceTasks.splice(sourceIndex, 1);
            newDestinationTasks.splice(destinationIndex, 0, taskToMove);

            await moveTaskToAnotherStatus(
                sourceStatusId,
                newSourceTasks,
                destinationStatusId,
                newDestinationTasks,
                sourceStatusIndex,
                destinationStatusIndex,
            );
        }
    };

    const moveTaskInSameStatus = async (
        sourceStatusId: string,
        newTasks: Task[],
        sourceStatusIndex: number,
    ) => {
        await rearrangeTasksMutation
            .mutateAsync({
                statusId: sourceStatusId,
                tasks: newTasks,
            })
            .then(() => {
                setStatuses((previousStatuses) => {
                    if (previousStatuses === undefined) return [];

                    previousStatuses[sourceStatusIndex].tasks = newTasks;

                    return previousStatuses;
                });
            });
    };

    const moveTaskToAnotherStatus = async (
        sourceStatusId: string,
        newSourceTasks: Task[],
        destinationStatusId: string,
        newDestinationTasks: Task[],
        sourceStatusIndex: number,
        destinationStatusIndex: number,
    ) => {
        await Promise.allSettled([
            rearrangeTasksMutation.mutateAsync({
                statusId: sourceStatusId,
                tasks: newSourceTasks,
            }),
            rearrangeTasksMutation.mutateAsync({
                statusId: destinationStatusId,
                tasks: newDestinationTasks,
            }),
        ]).then(() => {
            setStatuses((previousStatuses) => {
                if (previousStatuses === undefined) return [];

                previousStatuses[sourceStatusIndex].tasks = newSourceTasks;

                previousStatuses[destinationStatusIndex].tasks =
                    newDestinationTasks;

                return previousStatuses;
            });
        });
    };

    useEffect(() => {
        setStatuses(statusesResponse?.data);
    }, [statusesResponse]);

    return (
        <TaskContext.Provider
            value={{
                handleDragEnd,
                statuses,
                isFetchingStatuses,
                isMovingTask,
            }}
        >
            <TaskModalsProvider>{children}</TaskModalsProvider>
        </TaskContext.Provider>
    );
};

export const useTaskContext = () => {
    return useContext(TaskContext);
};
