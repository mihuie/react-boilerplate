const { ncp } = require('ncp');
const rimraf = require('rimraf');

const deleteFiles = () => {
  const promise =  new Promise((resolve) => {
    rimraf('./release', function () { resolve(); });
  });
  return promise;
};

ncp.limit = 16;
function copyFiles(src, dest) {
  ncp(src, dest);
}

deleteFiles()
  .then(() => {
    copyFiles('./dev', './release');
  });
