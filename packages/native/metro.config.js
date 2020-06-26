const getWorkspaces = require('get-yarn-workspaces');
const path = require('path');

function getConfig(appDir, options = {}) {
  const workspaces = getWorkspaces(appDir);

  // Add additional Yarn workspace package roots to the module map
  // https://bit.ly/2LHHTP0
  const watchFolders = [
    path.resolve(
      appDir,
      '..',
      'common',
      'node_modules'
    ),
    ...workspaces.filter(
      workspaceDir => !(workspaceDir === appDir)
    ),
  ];

  return {
    watchFolders,
    resolver: {
      extraNodeModules: {
        // Resolve all react-native module imports to the locally-installed version
        'react-native': path.resolve(
          appDir,
          'node_modules',
          'react-native'
        ),
      },
    },
  };
}

module.exports = getConfig(__dirname);
