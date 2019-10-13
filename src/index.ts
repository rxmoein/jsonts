import { argsHaveError, parseArgumentsIntoOptions } from './common/arg';
import intro from './common/intro';

export function cli(args: string[]) {
    let options = parseArgumentsIntoOptions(args);

    if (args.length === 2) {
        console.log(intro.text);
        return;
    }

    if (argsHaveError(options)) {
        return;
    }

    console.log(options);
}
