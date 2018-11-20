const fs = require("fs");
const path = require("path");
const fsx = require("fs-extra");

const getCurrentDirectoryBase = () => {
  return path.basename(process.cwd());
};

const directoryExists = filePath => {
  try {
    return fs.statSync(filePath).isDirectory();
  } catch (err) {
    return false;
  }
};

const fileExists = filePath => {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
};

const remove = filePath => {
  fsx.remove(filePath, err => {
    if (err) return err;
    return true;
  });
};

module.exports = {
  getCurrentDirectoryBase,
  directoryExists,
  fileExists,
  remove
};
