const config = {
  env: { node: true },
  parserOptions: {
    project: './tsconfig.lint.json',
    tsconfigRootDir: __dirname,
  },
};

module.exports = config;
