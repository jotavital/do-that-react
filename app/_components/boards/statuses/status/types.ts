import { Status } from '@/app/_models/Status';

export type StatusColor = 'red' | 'green' | 'blue';

export interface StatusProps {
    status: Status;
}
