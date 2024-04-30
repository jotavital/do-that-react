import { PulseLoader } from 'react-spinners';

interface Props {
    color?: string;
}

export const Loading: React.FC<Props> = ({ color = '#023e8a' }: Props) => {
    return (
        <PulseLoader
            color={color}
            cssOverride={{
                margin: '0 auto',
            }}
            size={10}
        />
    );
};
