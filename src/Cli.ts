import { program } from 'commander';

export class Cli {
    public cli = async (argv: any): Promise<void> => {
        program
            .command('list')
            .description('list managed aws-cdk stack')
            .action(async () => {
                console.log('Comming Soon. This function has not implemented yet.');
            });

        program
            .command('add')
            .description('add aws-cdk stack to manage by this tool')
            .action(async () => {
                console.log('Comming Soon. This function has not implemented yet.');
            });

        program
            .command('rm')
            .description('remove aws-cdk stack from managing list')
            .action(async () => {
                console.log('Comming Soon. This function has not implemented yet.');
            });

        program
            .command('logs')
            .description('remove aws-cdk stack from managing list')
            .action(async () => {
                console.log('Comming Soon. This function has not implemented yet.');
            });

        program.parse(argv);
    };
}
