import * as zod from 'zod';

export const customErrorMap: zod.ZodErrorMap = (error, ctx) => {
	if (error.message) return { message: error.message };

	console.log(error);
	switch (error.code) {
		case zod.ZodIssueCode.too_small:
			if (error.minimum === 1) {
				return {
					message: `Campo obrigatório`,
				};
			}

			return {
				message: `Deve conter no mínimo ${error.minimum} caracteres`,
			};

		case zod.ZodIssueCode.invalid_type:
			return { message: `Campo obrigatório` };

		case zod.ZodIssueCode.invalid_string:
			if (error.validation === 'email') {
				return {
					message: `O endereço de e-mail informado não é válido`,
				};
			}

			return { message: `O valor informado não é válido` };
	}

	return { message: ctx.defaultError };
};

zod.setErrorMap(customErrorMap);

export default zod;
