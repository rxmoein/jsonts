export default {
    text: [
        'JSONTS',
        'A tool to convert json to a complete customized typescript class',
        '',
        'OPTIONS',
        '    --input      -i  Specifies the input json file',
        // '   --output     -o  Specifies the output typescript file',
        '    --title      -t  Title of the output model (default="MyModel")',
        '    --comments   -c  Enables the general comments if "true" (default=false)',
        '    --targetCase     Can be one of "PascalCase", "CamelCase", "Underscore" (default=CamelCase)',
        '    --constructor    Generates constructor if "true" (default=false)',
        '    --checkFields    Makes the constructor private and creates a static method to check fields (default=false)',
        '    --jsonMethod     Generates a method to convert this model back to json with new values',
        '',
        'NOTES',
        'If you use --checkFields option, generated model will use some custom helper functions.',
        'To get helper functions type "jsonts helpers"'
    ].join('\n'),
}
