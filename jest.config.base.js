module.exports = {
    preset: 'ts-jest/presets/js-with-babel',
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx,mjs}'
    ],
    moduleDirectories: [
        "node_modules",
        "src",
        "test",
        "declaration-files"
    ],
    coverageReporters: [
        'json',
        'html'
    ],
    verbose: true,
    testMatch: [
        "**/test/**/?(*.)(spec|test).{js,jsx,mjs,ts,tsx}"
    ],
    setupFilesAfterEnv: [
        '<rootDir>/../../config/jest/setup.js',
    ],
    testEnvironment: 'jsdom',
    testURL: 'http://localhost',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.(js|jsx|mjs)$': '<rootDir>/../../config/jest/babel-transform.js',
        '^(?!.*\\.(js|jsx|ts|tsx|mjs|css|json)$)': '<rootDir>/../../config/jest/fileTransform.js'
    },
    coverageDirectory: 'coverage',
    transformIgnorePatterns: [
        '/node_modules/',
    ],
    moduleNameMapper: {
        'ui-components(.*)$': '<rootDir>/../ui-components/src/$1',
        '@utils(.*)$': '<rootDir>/../@utils/src/$1',
        'base-app(.*)$': '<rootDir>/../base-app/src/$1',
    },
    moduleFileExtensions: [
        'web.js',
        'mjs',
        'js',
        'json',
        'web.jsx',
        'jsx',
        'ts',
        'tsx',
        'node'
    ],
    globals: {
        'ts-jest': {
            'diagnostics': true,
            "compiler": "ttypescript"
        },
    },
    cacheDirectory: './.jest-cache',
    notify: true,
    notifyMode: 'always',
};
