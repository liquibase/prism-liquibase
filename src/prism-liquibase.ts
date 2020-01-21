import Prism from 'prismjs';
import { LIQUIBASE_DIFF_REQUIRED_PARAMETERS, LIQUIBASE_DIFF_OPTIONAL_PARAMETERS, LIQUIBASE_COMMANDS, LIQUIBASE_REQUIRED_PARAMETERS, LIQUIBASE_OPTIONAL_PARAMETERS } from './tokens';
import { getCliRegex } from './util/get-cli-regex';

Prism.languages.bash = Prism.languages.insertBefore('bash', 'environment', {
  'liquibase-cli': {
    pattern: /(liquibase)\s(.*)/gm,
    inside: {
      'liquibase': {
        pattern: /(?<!--)liquibase/gm,
        lookbehind: true,
        alias: [
          'namespace'
        ]
      },
      'liquibase-diff-required-parameters': {
        pattern: getCliRegex(LIQUIBASE_DIFF_REQUIRED_PARAMETERS),
        lookbehind: true,
        alias: [
          'entity'
        ]
      },
      'liquibase-diff-optional-parameters': {
        pattern: getCliRegex(LIQUIBASE_DIFF_OPTIONAL_PARAMETERS),
        lookbehind: true,
        alias: [
          'entity'
        ]
      },
      'liquibase-command': {
        pattern: getCliRegex(LIQUIBASE_COMMANDS),
        lookbehind: true,
        alias: [
          'support',
          'keyword'
        ]
      },
      'liquibase-required-parameter': {
        pattern: getCliRegex(LIQUIBASE_REQUIRED_PARAMETERS),
        lookbehind: true,
        alias: [
          'entity'
        ]
      },
      'liquibase-optional-parameter': {
        pattern: getCliRegex(LIQUIBASE_OPTIONAL_PARAMETERS),
        lookbehind: true,
        alias: [
          'entity'
        ]
      },
    }
  }
}, Prism.languages);
