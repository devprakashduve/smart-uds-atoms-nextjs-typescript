import type { Config } from '@jest/types';
import nextJest from 'next/jest';

const createJestConfig = nextJest({ dir: './' });

// Explicit Jest config type
const customJestConfig: Config.InitialOptions = {
  maxWorkers: 2,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/.rollup.cache/',
    '<rootDir>/dist/',
  ],
};

// Merge with Next.js preset and export
export default createJestConfig(customJestConfig);
