import arg from 'arg';

export function argsHaveError(args: any): boolean {
    if (!args.input || !args.output) {
        console.error('Please specify both --input and --output to perform the action!');
        return true;
    }

    if (!args.input.includes('.json')) {
        console.error('Input must be json file!');
        return true;
    }

    if (!args.output.includes('.ts')) {
        console.error('Output must be a typescript file!');
        return true;
    }

    return false;
}

export function parseArgumentsIntoOptions(rawArgs: any) {
    const args = arg(
        {
            '--input': String,
            '--output': String,
            '-i': '--input',
            '-o': '--output',
        },
        {
            argv: rawArgs.slice(2),
        }
    );
    return {
        input: args['--input'] || '',
        output: args['--output'] || '',
    };
}
