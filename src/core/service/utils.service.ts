import { ConvertOptions } from '../models/convert.mode';
import { CliOptions } from '../models/cli.model';
import { Field } from '../models/field.model';
import fs from 'fs';

export function readJson(path: string) {
    const data = fs.readFileSync(path)
    return JSON.parse(String(data));
}

/**
 * Detects and collects all fields of an input 
 * @param input Target object
 */
export function detectFields(input: any): Field[] {
    const collection: Field[] = [];
    for (const key in input) {
        if (input.hasOwnProperty(key)) {
            if (detectValueType(input[key]) !== 'skip') {
                collection.push(new Field(
                    key,
                    detectValueType(input[key]),
                ));
            }
        }
    }
    return collection;
}

/**
 * Detects the value type
 * @param value Target value
 */
export function detectValueType(value: any): string {
    const type = typeof value;

    if (
        type === 'string'
        || type === 'number'
        || type === 'boolean'
        || type === 'bigint'
    ) {
        return type;
    }

    return 'skip';
}

export function overrideOptions(initial: any, target: any): ConvertOptions {
    const result = JSON.parse(JSON.stringify(initial))
    for (const key in target) {
        if (target.hasOwnProperty(key)) {
            const element = target[key];
            if (element !== undefined && element !== null && element !== '') {
                result[key] = element
            }
        }
    }
    return result;
}
