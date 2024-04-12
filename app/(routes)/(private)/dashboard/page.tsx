import { NextPage } from 'next';
import { Statuses } from '@/app/_components/boards/statuses';

const DashboardPage: NextPage = () => {
    return (
        <section className="w-full h-[calc(100%-60px)] flex p-6 gap-6 overflow-x-auto">
            <Statuses />
        </section>
    );
};

export default DashboardPage;
