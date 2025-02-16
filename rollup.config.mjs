import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';
import pkg from './package.json';
import terser from '@rollup/plugin-terser';

export default [
  {
    // Entry point of the library
    input: 'src/index.ts',
    // Output bundles for CommonJS and ES Modules with sourcemaps enabled
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      // Automatically externalize peerDependencies in package.json
      peerDepsExternal(),
      // Resolve node modules so Rollup can bundle them
      resolve(),
      terser(),
      // Convert CommonJS modules to ES6
      commonjs(),
      // Compile TypeScript files
      typescript({
        tsconfig: './tsconfig.json',
        jsx: 'preserve',
      }),
      // Transpile JavaScript/TypeScript with Babel for broader compatibility
      babel({
        babelHelpers: 'bundled',
        extensions: ['.ts', '.tsx'],
        presets: [
          '@babel/preset-env',
          ['@babel/preset-react', { runtime: 'automatic' }],
          '@babel/preset-typescript',
        ],
      }),
      // Import image files into the bundle
      image(),
      // Process CSS files with PostCSS
      postcss({
        extract: true, // or false if you prefer inline styles
      }),
    ],
    // Externalize dependencies that should not be bundled
    external: ['react', 'react-dom'],
  },
  {
    input: 'src/index.ts',
    output: [{ file: pkg.types, format: 'esm' }],
    plugins: [dts.default()],
  },
];
