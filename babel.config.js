module.exports = function (api) {
    api.cache(true);

    const presets = [
        '@babel/preset-react',
        '@babel/preset-typescript',
        [
            '@babel/preset-env',
            {
                'debug': false,
                'targets': {
                    'browsers': [
                        'last 3 versions'
                    ]
                }
            }
        ]
    ];
    const plugins = [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-transform-regenerator',
        '@babel/plugin-transform-runtime',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-proposal-optional-chaining',
        'babel-plugin-dynamic-import-node',
        ['@babel/plugin-proposal-decorators', { 'legacy': true }],
        ['@babel/plugin-proposal-class-properties', { 'loose': true }],
    ];

    if (process.env.USE_HOT_LOADER === 'true') {
        plugins.unshift('react-refresh/babel');
    }

    return {
        presets,
        plugins,
    };
};
