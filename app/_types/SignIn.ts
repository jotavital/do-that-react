import zod from '@/app/_lib/zod';

export const SignInSchema = zod.object({
	email: zod.string().min(1).email(),
	password: zod.string().min(1),
});

export type SignInProps = zod.infer<typeof SignInSchema>;
