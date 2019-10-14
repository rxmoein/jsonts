export interface ConvertOptions {
    title: string;
    comments: boolean;
    targetCase: 'PascalCase' | 'CamelCase' | 'Underscore';
    constructor: boolean;
}
