import { generateHeader, closeClass, generateField } from "./content.service";
import { ConvertOptions } from "../models/convert.mode";
import { detectFields } from "./utils.service";

export function convert(input: any, options: ConvertOptions): string {
    const output: string[] = [];
    const fields = detectFields(input);

    output.push(generateHeader(options))

    for (const field of fields) {
        output.push(generateField(field, options));
    }

    output.push(closeClass(options))
    return output.join('\n');
}
