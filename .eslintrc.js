module.exports = {
    extends: [
        'next/core-web-vitals',
        'prettier',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
    ],
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
    },
    root: true,
    rules: {
        '@typescript-eslint/no-misused-promises': [
            2,
            {
                checksVoidReturn: {
                    attributes: false,
                },
            },
        ],
        '@typescript-eslint/no-unsafe-call': 0,
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/no-unsafe-return': 0,
    },
};
