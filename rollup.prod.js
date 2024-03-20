import typescript from '@rollup/plugin-typescript';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import {babel} from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';

export default {
	external: [],
	input: ['src/index.ts'],
	plugins: [
		json(),
		nodeResolve({
			extensions: ['.ts', '.mjs', '.js', '.json'],
		}),
		typescript({
			tsconfig: './tsconfig.json',
			exclude: ['./src/dev/**.*']
		}),
		babel({
			babelHelpers: 'bundled',
			exclude: 'node_modules/**',
		})
	],
	output: {
		dir: './dist',
		format: 'es',
		sourcemap: true
	}
};