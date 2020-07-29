type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

type Rule = {
    term: {
        time: {
            from: number;
            to: number;
        };
        days: Day[];
    };
};

type AwsCdkStack = {
    name: string;
    absolutePath: string;
    rule: Rule;
};

export class AwsCdkManager {
    defaultRule: Rule;

    constructor() {
        // TODO: Read defaultRule from config file
        this.defaultRule = {
            term: {
                time: { from: 600, to: 1800 },
                days: ['Monday']
            }
        };
    }
}
