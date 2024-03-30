import zod from '@/app/_lib/zod';

export const SignInSchema = zod.object({
	email: zod.string().min(1).email(),
	access_code: zod.string().min(6),
});

export type SignInProps = zod.infer<typeof SignInSchema>;
