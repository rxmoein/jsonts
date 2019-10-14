import { argsHaveError, parseArgumentsIntoOptions } from './core/service/args.service';
import convertOptions from './core/defaults/convert-options';
import { convert } from './core/service/convert.service';
import { readJson, overrideOptions } from './core/service/utils.service';
import intro from './core/defaults/intro';

export function cli(args: string[]) {
    let options = parseArgumentsIntoOptions(args);

    if (args.length === 2) {
        console.log(intro.text);
        return;
    }

    if (argsHaveError(options)) {
        return;
    }

    try {
        const input = readJson(options.input)
        const preparedOptions = overrideOptions(convertOptions, options)
        const output = convert(input, preparedOptions);
        console.log(output);
    } catch (error) {
        console.log("Input json file is invalid or unable to read it.");
    }
}
