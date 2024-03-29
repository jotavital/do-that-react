import zod from '@/app/_lib/zod';

export const RegisterSchema = zod.object({
	name: zod.string().min(3),
	email: zod.string().min(1).email(),
});

export type RegisterProps = zod.infer<typeof RegisterSchema>;
