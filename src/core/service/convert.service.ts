import {
    closeBlock,
    generateField,
    generateHeader,
    generateConstructorHeader,
    generateConstructorContent
} from "./content.service";
import { ConvertOptions } from "../models/convert.mode";
import { detectFields } from "./utils.service";

export function convert(input: any, options: ConvertOptions): string {
    const output: string[] = [];
    const fields = detectFields(input);

    fields.sort(function (a, b) {
        return a.name.length - b.name.length;
    });

    output.push(generateHeader(options));

    for (const field of fields) {
        output.push(generateField(field, options));
    }

    if (options.constructor) {
        generateConstructorHeader(output, options);
        generateConstructorContent(output, options, fields);
        output.push(closeBlock(options, '    '));
    }

    output.push(closeBlock(options));
    return output.join('\n');
}
