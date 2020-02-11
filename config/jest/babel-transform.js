const babelConfig = require('../../babel.config');
const apiMock = {
    cache: () => {}
};

module.exports = require('babel-jest').createTransformer(babelConfig(apiMock));
