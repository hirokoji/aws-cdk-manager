#!/usr/bin/env node

import {Cli} from "./Cli";

const rootDirPath = __dirname + '/../';
const cli = new Cli();
cli.cli(process.argv);
