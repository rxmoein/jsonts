import { ConvertOptions } from "../models/convert.mode";
import { Field } from "../models/field.model";

export function generateHeader(options: ConvertOptions) {
    return `export class ${options.title}`;
}

export function generateField(field: Field, options: ConvertOptions) {
    return `    ${field.name}: ${field.type};`;
}

export function closeClass(options: ConvertOptions) {
    return `}`;
}
