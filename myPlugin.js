module.exports = () => {
    return {
        version: 2.1,
        resolveTemplateCompilerOptions(options) {
            // ...modify options
            return options;
        },
    };
};
