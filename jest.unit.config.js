module.exports = {
  preset: "ts-jest",
  testMatch: ["<rootDir>/src/**/*.test.ts", "<rootDir>/src/**/*.test.tsx"],
  modulePathIgnorePatterns: ["<rootDir>/src/test"],
  errorOnDeprecated: true
}
