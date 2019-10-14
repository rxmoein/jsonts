export interface ConvertOptions {
    title: string;
    comment: boolean;
    targetCase: 'PascalCase' | 'CamelCase' | 'Underscore';
    constructor: boolean;
    checkFields: boolean;
    jsonMethod: boolean;
}
