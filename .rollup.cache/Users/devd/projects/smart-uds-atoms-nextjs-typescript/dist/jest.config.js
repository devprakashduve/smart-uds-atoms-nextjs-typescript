import nextJest from 'next/jest';
const createJestConfig = nextJest({ dir: './' });
// Explicit Jest config type
const customJestConfig = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
};
// Merge with Next.js preset and export
export default createJestConfig(customJestConfig);
//# sourceMappingURL=jest.config.js.map