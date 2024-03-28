import * as zod from 'zod';

export const customErrorMap: zod.ZodErrorMap = (error, ctx) => {
	if (error.message) return { message: error.message + 'sfkj' };

	switch (error.code) {
		case zod.ZodIssueCode.invalid_type:
			return { message: `Campo obrigatório` };
	}

	return { message: ctx.defaultError };
};

zod.setErrorMap(customErrorMap);

export default zod;
