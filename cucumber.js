module.exports = {
    default: {
        paths: ['tests/features/**/*.feature'],
        require: ['tests/src/**/*.ts'],
        requireModule: ['ts-node/register'],
        format: ['progress', 'summary'],
        // publishQuiet: true
    }
};