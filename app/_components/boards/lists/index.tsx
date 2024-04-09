import { ListHeader } from '@/app/_components/boards/lists/header';
import { TaskList } from '@/app/_components/boards/lists/tasks';
import { ListProps } from '@/app/_components/boards/lists/types';

export const List: React.FC<ListProps> = ({
    title,
    color = 'blue',
}: ListProps) => {
    return (
        <div className="bg-slate-200 min-w-72 h-full border-slate-300 border-[1px] shadow-md rounded-md">
            <ListHeader title={title} color={color} />

            <TaskList />
        </div>
    );
};
