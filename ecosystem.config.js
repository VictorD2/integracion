module.exports = {
  apps: [
    {
      name: 'WAPP DINORSA',
      script: './dist/src/index.js',
      node_args: '-r ts-node/register/transpile-only -r tsconfig-paths/register',
    },
  ],
};
