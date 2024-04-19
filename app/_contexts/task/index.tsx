'use client';

import {
    createContext,
    ReactNode,
    useCallback,
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

    const handleDragEnd = useCallback(
        async (result: DropResult) => {
            if (statuses === undefined) return;

            const {
                destination,
                source: { index: sourceIndex, droppableId: sourceDroppableId },
            } = result;

            if (!destination) return;

            const {
                droppableId: destinationDroppableId,
                index: destinationIndex,
            } = destination;

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

            const sourceStatusId =
                sourceDroppableId.split('droppable-status-')[1];
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

                await rearrangeTasksMutation
                    .mutateAsync({
                        statusId: sourceStatusId,
                        tasks: reorderedTasks,
                    })
                    .then(() => {
                        setStatuses((previousStatuses) => {
                            if (previousStatuses === undefined) return [];

                            previousStatuses[sourceStatusIndex].tasks =
                                reorderedTasks;

                            return previousStatuses;
                        });
                    });
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

                await rearrangeTasksMutation
                    .mutateAsync({
                        statusId: sourceStatusId,
                        tasks: newSourceTasks,
                    })
                    .then(() => {
                        setStatuses((previousStatuses) => {
                            if (previousStatuses === undefined) return [];

                            previousStatuses[sourceStatusIndex].tasks =
                                newSourceTasks;

                            return previousStatuses;
                        });
                    });

                await rearrangeTasksMutation
                    .mutateAsync({
                        statusId: destinationStatusId,
                        tasks: newDestinationTasks,
                    })
                    .then(() => {
                        setStatuses((previousStatuses) => {
                            if (previousStatuses === undefined) return [];

                            previousStatuses[destinationStatusIndex].tasks =
                                newDestinationTasks;

                            return previousStatuses;
                        });
                    });
            }
        },
        [rearrangeTasksMutation, statuses],
    );

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
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext = () => {
    return useContext(TaskContext);
};
