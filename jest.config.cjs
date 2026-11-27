module.exports = {
  preset: 'react-native',
  roots: ['<rootDir>/src/mobile'],
  testMatch: ['**/*.test.tsx'],
  transform: {
    '^.+\\.(js|ts|tsx)$': ['babel-jest', { presets: ['module:@react-native/babel-preset'] }],
  },
}
