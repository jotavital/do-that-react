export interface ApiValidationError {
    errors: {
        [name: string]: string[];
    };
    message: string;
}
