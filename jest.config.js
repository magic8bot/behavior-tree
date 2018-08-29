module.exports = {
  verbose: true,
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '.*\\.spec\\.ts$',
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'js'],
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json',
    },
  },
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules'],
}
