import { BoardColumn } from '@/app/_components/boards/column';
import { NextPage } from 'next';

const DashboardPage: NextPage = () => {
    return (
        <section className="w-full h-[calc(100%-60px)] flex p-6 gap-6 overflow-x-auto">
            <BoardColumn title="Pendentes" color="red" />

            <BoardColumn title="Em Andamento" />

            <BoardColumn title="Concluídos" color="green" />
        </section>
    );
};

export default DashboardPage;
