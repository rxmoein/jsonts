import { ConvertOptions } from "../models/convert.mode";
import { Field } from "../models/field.model";

export function generateHeader(options: ConvertOptions) {
    return `export class ${convertCase(options.title, 'PascalCase')} {`;
}

export function generateField(field: Field, options: ConvertOptions) {
    return `    ${convertCase(field.name, options.targetCase)}: ${field.type};`;
}

export function generateConstructorHeader(output: string[], options: ConvertOptions) {
    output.push(``);
    if (options.comment) {
        output.push(`    /**`);
        output.push(`     * The default constructor of ${options.title} class`);
        output.push(`     * @param obj prepared object`);
        output.push(`     */`);
    }

    output.push(`    constructor(obj: any) {`);
}

export function generateConstructorContent(output: string[], options: ConvertOptions, fields: Field[]) {
    for (const field of fields) {
        output.push(`        this.${convertCase(field.name, options.targetCase)} = obj.${field.name}`);
    }
}

export function closeBlock(options: ConvertOptions, prefix = '') {
    return prefix + `} `;
}

function convertCase(name: string, target: 'PascalCase' | 'CamelCase' | 'Underscore') {
    switch (target) {
        case 'PascalCase': return name[0].toUpperCase() + name.slice(1);
        case 'CamelCase': return name[0].toLowerCase() + name.slice(1);
        case 'Underscore': return name.replace(/(?:^|\.?)([A-Z])/g, function (x, y) { return "_" + y.toLowerCase() }).replace(/^_/, "")
    }
}
