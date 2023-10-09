const nextJest = require('next/jest.js')
const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '.spec.tsx?$',
  moduleFileExtensions: ['ts', 'js', 'tsx'],
  clearMocks: true,
  verbose: true,
  rootDir: '../',
  moduleNameMapper: {
    '@mocks/(.*)': '<rootDir>/_mocks_/$1',
    '@tests/(.*)': '<rootDir>/_tests_/$1',
    '@src/(.*)': '<rootDir>/src/$1',
  },
  setupFiles: ['<rootDir>/__tests__/setup.ts'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**',
    '!<rootDir>/src/(.)/(.*).d.ts',
    '!<rootDir>/src/dataSources.ts',
    '!<rootDir>/src/routes/**',
    '!<rootDir>/src/types/*/',
  ],
}

module.exports = createJestConfig(customJestConfig)