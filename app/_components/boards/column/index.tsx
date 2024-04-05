import { ColumnHeader } from '@/app/_components/boards/column/header';
import { TaskList } from '@/app/_components/boards/column/tasks';
import { BoardColumnProps } from '@/app/_components/boards/column/types';

export const BoardColumn: React.FC<BoardColumnProps> = ({
    title,
    color = 'blue',
}: BoardColumnProps) => {
    return (
        <div className="bg-slate-200 min-w-72 h-full border-slate-300 border-[1px] shadow-md rounded-md">
            <ColumnHeader title={title} color={color} />

            <TaskList />
        </div>
    );
};
