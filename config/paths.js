const path = require('path');
const url = require('url');

const envPublicUrl = process.env.PUBLIC_URL;

function ensureSlash(path, needsSlash) {
    const hasSlash = path.endsWith('/');
    if (hasSlash && !needsSlash) {
        return path.substr(path, path.length - 1);
    } else if (!hasSlash && needsSlash) {
        return `${path}/`;
    } else {
        return path;
    }
}

const getPublicUrl = appPackageJson =>
    envPublicUrl || require(appPackageJson).homepage;

function getServedPath(appPackageJson) {
    const publicUrl = getPublicUrl(appPackageJson);
    const servedUrl = envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/');
    return ensureSlash(servedUrl, true);
}

const appPath = path.resolve(__dirname, '../packages/base-app');

module.exports = {
    dotenv: path.resolve(__dirname, '.env'),
    appBuild: path.resolve(appPath, 'build'),
    appPublic: path.resolve(appPath, 'public'),
    appHtml: path.resolve(appPath, 'public/index.html'),
    appIndexJs: path.resolve(appPath, 'src/index.tsx'),
    appPackageJson: path.resolve(appPath, 'package.json'),
    appSrc: path.resolve(appPath, 'src'),
    yarnLockFile: path.resolve(appPath, 'yarn.lock'),
    appNodeModules: path.resolve(appPath, 'node_modules'),
    publicUrl: getPublicUrl(path.resolve(appPath, 'package.json')),
    servedPath: getServedPath(path.resolve(appPath, 'package.json')),
    logo: path.resolve(appPath, 'src/assets/logo.png')
};
