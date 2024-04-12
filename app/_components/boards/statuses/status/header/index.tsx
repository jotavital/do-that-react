import { StatusProps } from '@/app/_components/boards/statuses/status/types';

export const StatusHeader: React.FC<StatusProps> = ({
    status,
}: StatusProps) => {
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
            className={`min-h-12 p-3 border-l-4 rounded-bl-sm rounded-tl-md
            ${headerClassnames[status.color]}`}
        >
            <h1
                className={`text-lg font-semibold ${titleClassnames[status.color]}`}
            >
                {status.title}
            </h1>
        </div>
    );
};
