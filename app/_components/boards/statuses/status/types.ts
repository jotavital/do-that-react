import { Status } from '@/app/_types/Status';

export type StatusColor = 'red' | 'green' | 'blue';

export interface StatusProps {
    status: Status;
}
