import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [resolve(), typescript({ useTsconfigDeclarationDir: true })],
  },
];
