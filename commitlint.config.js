/** @type {import('@commitlint/types').UserConfig} */
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      'feat',    // new feature
      'fix',     // bug fix
      'docs',    // documentation only
      'style',   // formatting, no logic change
      'refactor',// code change without feat/fix
      'perf',    // performance improvement
      'test',    // adding or fixing tests
      'chore',   // build process, tooling
      'ci',      // CI/CD changes
      'revert',  // revert a commit
    ]],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-max-length': [2, 'always', 72],
    'body-max-line-length': [2, 'always', 100],
  },
};
