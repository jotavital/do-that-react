import { KeyboardEvent } from 'react';

export const preventSubmitOnEnter = (event: KeyboardEvent<HTMLFormElement>) => {
	if (
		event.key === 'Enter' ||
		event.code === 'Enter' ||
		event.keyCode === 13
	) {
		event.preventDefault();
	}
};
