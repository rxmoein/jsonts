export default {
    text: [
        'JSONTS',
        'A tool to convert json to a complete customized typescript class',
        '',
        'OPTIONS',
        '   --input      -i  Specifies the input json file',
        '   --output     -o  Specifies the output typescript file',
        '   --title      -t  Title of the output model (default="MyModel")',
        '   --comments   -c  Enables the general comments if "true" (default=false)',
        '   --targetCase     Can be one of "PascalCase", "CamelCase", "Underscore" (default=CamelCase)',
        '   --constructor    Generates constructor if "true" (default=true)'
    ].join('\n'),
}
