import * as chalk from 'chalk';

import { CommandMetadata } from '@totvs/cli-utils';

import { CORDOVA_RUN_COMMAND_OPTIONS, CordovaRunCommand } from './base';

@CommandMetadata({
  name: 'emulate',
  type: 'project',
  description: 'Emulate an Ionic project on a simulator or emulator',
  longDescription: `
Like running ${chalk.green('cordova emulate')} directly, but also watches for changes in web assets and provides live-reload functionality with the ${chalk.green('--livereload')} option.
  `,
  exampleCommands: ['', 'ios', 'ios -lc', 'android --livereload -cs'],
  inputs: [
    {
      name: 'platform',
      description: `The platform to emulate: ${chalk.green('ios')}, ${chalk.green('android')}`,
    }
  ],
  options: CORDOVA_RUN_COMMAND_OPTIONS,
})
export class EmulateCommand extends CordovaRunCommand {}
