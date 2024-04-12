import { PulseLoader } from 'react-spinners';

export const Loading: React.FC = () => {
    return (
        <PulseLoader
            color="#023e8a"
            cssOverride={{
                margin: '0 auto',
            }}
            size={10}
        />
    );
};
