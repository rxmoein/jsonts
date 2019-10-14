import { CliOptions } from '../models/cli.model';
import arg from 'arg';

export function argsHaveError(args: any): boolean {
    if (!args.input) {
        console.error('Please specify --input to perform the action!');
        return true;
    }

    if (!args.input.includes('.json')) {
        console.error('Input must be json file!');
        return true;
    }

    if (args.targetCase) {
        if (!(
            args.targetCase === 'PascalCase'
            || args.targetCase === 'CamelCase'
            || args.targetCase === 'Underscore'
        )) {
            console.error('"targetCase" must be one of "PascalCase", "CamelCase", "Underscore"!');
            return true;
        }
    }

    return false;
}

export function parseArgumentsIntoOptions(rawArgs: any): CliOptions {
    const args = arg(
        {
            '--input': String,
            '--title': String,
            '--comment': Boolean,
            '--targetCase': String,
            '--constructor': Boolean,
            '-i': '--input',
            '-t': '--title',
            '-c': '--comment',
        },
        {
            argv: rawArgs.slice(2),
        }
    );
    return {
        input: args['--input'] || '',
        title: args['--title'] || '',
        comment: args['--comment'] || false,
        targetCase: args['--targetCase'] || '',
    };
}
