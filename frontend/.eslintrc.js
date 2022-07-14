rules: {
    /*  ...the other code is omitted for the brevity */
    'arrow-body-style': [1, 'as-needed'],
        'import/extensions': 'off',
            'prettier/prettier': [
                'error',
                {
                    semi: false,
                    singleQuote: true,
                    useTabs: true,
                    endOfLine: 'auto', /* this setting should be included */
                },
            ],