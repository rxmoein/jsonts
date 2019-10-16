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

    if (options.checkFields) {
        output.push(`    private constructor(obj: any) {`);
    } else {
        output.push(`    constructor(obj: any) {`);
    }
}

export function generateConstructorContent(output: string[], options: ConvertOptions, fields: Field[]) {
    for (const field of fields) {
        output.push(`        this.${convertCase(field.name, options.targetCase)} = obj.${field.name};`);
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

export function generateCreatorHeader(output: string[], options: ConvertOptions) {
    output.push(``);
    if (options.comment) {
        output.push(`    /**`);
        output.push(`     * Validates and creates sub models if they exists`);
        output.push(`     * @param obj a javascript object`);
        output.push(`     * @param field needed for errorHelper`);
        output.push(`     */`);
    }

    output.push(`    static Create(obj: any, field: string = 'root'): ${convertCase(options.title, 'PascalCase')} {`);
}

export function generateCreatorContent(output: string[], options: ConvertOptions, fields: Field[]) {
    output.push(`        if (!field) {`)
    output.push(`            field = 'root';`)
    output.push(`        }`)
    output.push(``)
    output.push(`        if (obj === null || obj === undefined) {`);
    output.push(`            throwNull2NonNull(field, obj);`)
    output.push(`        } else if (typeof (obj) !== 'object') {`)
    output.push(`            throwNotObject(field, obj, false);`)
    output.push(`        } else if (Array.isArray(obj)) {`)
    output.push(`            throwIsArray(field, obj, false);`);
    output.push(`        }`);
    output.push(``)

    for (const field of fields) {
        const funcName = convertCase(field.type, 'PascalCase');
        output.push(`        check${funcName}(obj.${field.name}, false, field + '.${field.name}');`);
    }

    output.push(``)
    output.push(`        return new ${convertCase(options.title, 'PascalCase')}(obj);`);
}

export function generateJSONHeader(output: string[], options: ConvertOptions) {
    output.push(``);
    if (options.comment) {
        output.push(`    /**`);
        output.push(`     * Converts this object back to json`);
        output.push(`     */`);
    }

    output.push(`    json(): string {`);
}

export function generateJSONContent(output: string[], options: ConvertOptions, fields: Field[]) {
    output.push(`        const output: any = {};`);
    output.push(``);

    for (const field of fields) {
        output.push(`        output.${field.name} = this.${convertCase(field.name, options.targetCase)};`);
    }

    output.push(``);
    output.push(`        return JSON.stringify(output);`);
}
