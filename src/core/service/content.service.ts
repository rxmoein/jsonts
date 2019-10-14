import { ConvertOptions } from "../models/convert.mode";
import { Field } from "../models/field.model";

export function generateHeader(options: ConvertOptions) {
    return `export class ${convertCase(options.title, 'PascalCase')}`;
}

export function generateField(field: Field, options: ConvertOptions) {
    return `    ${convertCase(field.name, options.targetCase)}: ${field.type};`;
}

export function closeClass(options: ConvertOptions) {
    return `}`;
}

function convertCase(name: string, target: 'PascalCase' | 'CamelCase' | 'Underscore') {
    switch (target) {
        case 'PascalCase': return name[0].toUpperCase() + name.slice(1);
        case 'CamelCase': return name[0].toLowerCase() + name.slice(1);
        case 'Underscore': return name.replace(/(?:^|\.?)([A-Z])/g, function (x, y) { return "_" + y.toLowerCase() }).replace(/^_/, "")
    }
}
