
module.exports = {
  // The extends directive allows composition of configuration files
  extends: [
    '@strv/javascript/environments/nodejs/optional',
    '@strv/javascript/environments/nodejs/v7',
    '@strv/javascript/coding-styles/recommended',
  ],
  parserOptions: {
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  // If you need to override some rules specifically for this project,
  // you can do so as usual via the rules property.
  // Per-project rules take precedence over rules defined via included
  // configurations.
  rules: {
    'valid-jsdoc': 2,
    'padded-blocks': 0,
    'id-length': [1, {
      min: 2,
      max: 40,
      exceptions: [
        'i',
        '_',
      ],
    }],
    'camelcase': 0, // API params in json are camelcase
    'max-len': 0,
    'max-params': 0,
    'no-await-in-loop': 0,
    'arrow-body-style': 0,
    'new-cap': 0,
    'import/default': 0,
    'newline-per-chained-call': [1, {
      ignoreChainWithDepth: 4,
    }]
  }
}
