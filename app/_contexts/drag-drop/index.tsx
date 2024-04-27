import { useDragAndDrop } from '@/app/_hooks/useDragAndDrop';
import { DragDropContext } from 'react-beautiful-dnd';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const AppDragDropContext: React.FC<Props> = ({ children }: Props) => {
    const { onDragEnd } = useDragAndDrop();

    return <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>;
};
