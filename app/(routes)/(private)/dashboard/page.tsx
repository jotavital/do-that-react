import { List } from '@/app/_components/boards/lists';
import { NextPage } from 'next';

const DashboardPage: NextPage = () => {
    return (
        <section className="w-full h-[calc(100%-60px)] flex p-6 gap-6 overflow-x-auto">
            <List title="Pendentes" color="red" />

            <List title="Em Andamento" />

            <List title="Concluídos" color="green" />
        </section>
    );
};

export default DashboardPage;
