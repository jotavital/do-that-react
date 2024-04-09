import { ListColors } from '@/app/_components/boards/lists/types';

interface Props {
    title?: string;
    color?: ListColors;
}

export const ListHeader: React.FC<Props> = ({
    title,
    color = 'blue',
}: Props) => {
    const headerClassnames = {
        red: 'border-l-red-500',
        green: 'border-l-green-500',
        blue: 'border-l-blue-500',
    };

    const titleClassnames = {
        red: 'text-red-500',
        green: 'text-green-500',
        blue: 'text-blue-500',
    };

    return (
        <div
            className={`min-h-12 p-3 border-l-4 rounded-bl-sm rounded-tl-md ${headerClassnames[color]}`}
        >
            <h1 className={`text-lg font-semibold ${titleClassnames[color]}`}>
                {title}
            </h1>
        </div>
    );
};
