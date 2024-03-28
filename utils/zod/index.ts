import * as z from 'zod';

export const customErrorMap: z.ZodErrorMap = (error, ctx) => {
	if (error.message) return { message: error.message + 'sfkj' };

	switch (error.code) {
		case z.ZodIssueCode.invalid_type:
			return { message: `Campo obrigatório` };
	}

	return { message: ctx.defaultError };
};

z.setErrorMap(customErrorMap);

export { z as zod };
