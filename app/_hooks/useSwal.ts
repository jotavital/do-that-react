import Swal, { SweetAlertOptions } from 'sweetalert2';
import { useButtonClassnames } from '@/app/_components/shared/button/hooks/useButtonClassnames';

export const useSwal = (options: SweetAlertOptions) => {
    const { buttonClassname } = useButtonClassnames({
        color: 'green',
        customClassName: 'w-auto',
    });
    const { buttonClassname: redButtonClassname } = useButtonClassnames({
        color: 'red',
        variant: 'outline',
        customClassName: 'w-auto',
    });

    const swal = async () => {
        return await Swal.fire({
            icon: options?.icon ?? 'warning',
            title: options?.title,
            text: options?.text,
            showDenyButton: true,
            confirmButtonText: options?.confirmButtonText,
            denyButtonText: 'Cancelar',
            reverseButtons: true,
            focusConfirm: true,
            buttonsStyling: false,
            customClass: {
                confirmButton: buttonClassname,
                denyButton: redButtonClassname,
                actions: 'w-full flex flex-row gap-3',
            },
        });
    };

    return { swal };
};
