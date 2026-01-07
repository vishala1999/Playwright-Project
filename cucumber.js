module.exports = {
    default: {
        paths: ['tests/features/**/*.feature'],
        require: ['tests/src/**/*.ts'],
        requireModule: ['ts-node/register'],
        format: ['summary', 'json:reports/cucumber-report.json', 'html:reports/cucumber-report.html'],
        // publishQuiet: true
    }
};